import { Telegraf, Markup } from 'telegraf';
import dotenv from 'dotenv';
import { prisma } from '../../config/prisma';
import { cache } from '../../common/service/cache.service';

dotenv.config();

const token = process.env.TELEGRAM_BOT_TOKEN;

// Token mavjudligini tekshirish (bot.ts da ham tekshiriladi)
export const bot = new Telegraf(token || '');

// Start komandasi: Kontakni ulashish tugmasini yuboramiz
bot.start((ctx) => {
    return ctx.reply(
        "Assalomu alaykum! Edujavon tizimiga xush kelibsiz.\n\nRoʻyxatdan oʻtish yoki tizimga kirish uchun telefon raqamingizni yuboring:",
        Markup.keyboard([
            [Markup.button.contactRequest("📞 Telefon raqamni yuborish")]
        ]).oneTime().resize()
    );
});

// Kontakni qabul qilish
bot.on('contact', async (ctx) => {
    const contact = ctx.message.contact;
    const chatId = ctx.from.id.toString();

    // Xavfsizlik uchun: faqat foydalanuvchining o'z raqamini qabul qilamiz
    if (contact.user_id !== ctx.from.id) {
        return ctx.reply("Iltimos, oʻzingizning telefon raqamingizni yuboring (pastdagi tugmani bosing).");
    }

    let phoneNumber = contact.phone_number;
    if (!phoneNumber.startsWith('+')) {
        phoneNumber = `+${phoneNumber}`;
    }

    try {
        // Vaqtincha keshda saqlaymiz (1 soat)
        await cache.set(`bot:chatid:${phoneNumber}`, chatId, 60 * 60 * 1000);

        // Foydalanuvchini bazadan qidiramiz
        const user = await prisma.user.findUnique({
            where: { phone: phoneNumber }
        });

        if (user) {
            // Agar foydalanuvchi bo'lsa, chatId ni yangilaymiz
            await prisma.user.update({
                where: { id: user.id },
                data: { chatId }
            });
            await ctx.reply(`Xush kelibsiz, ${user.firstName}! Telefon raqamingiz tasdiqlandi.`, Markup.removeKeyboard());
        } else {
            // Agar foydalanuvchi bo'lmasa, shunchaki raqam qabul qilinganini aytamiz
            await ctx.reply(`Telefon raqamingiz qabul qilindi: ${phoneNumber}\n\nEndi sayt orqali roʻyxatdan oʻtishni davom ettirishingiz mumkin.`, Markup.removeKeyboard());
        }
    } catch (error) {
        console.error('[Bot] Contact handler xatosi:', error);
        await ctx.reply("Xatolik yuz berdi. Iltimos keyinroq urinib ko'ring.");
    }
});

// Boshqa matnli xabarlarga javob
bot.on('text', (ctx) => {
    return ctx.reply("Iltimos, telefon raqamingizni yuborish uchun pastdagi \"📞 Telefon raqamni yuborish\" tugmasini bosing.");
});

/**
 * Tasdiqlash kodi yuborish (auth.service uchun)
 */
export async function sendVerificationCode(phone: string, code: string) {
    try {
        let normalizedPhone = phone;
        if (!normalizedPhone.startsWith('+')) {
            normalizedPhone = `+${normalizedPhone}`;
        }

        let chatId: string | undefined;

        const user = await prisma.user.findUnique({
            where: { phone: normalizedPhone }
        });

        if (user && user.chatId) {
            chatId = user.chatId;
        } else {
            const cachedChatId = await cache.get(`bot:chatid:${normalizedPhone}`);
            if (cachedChatId) {
                chatId = String(cachedChatId);
            }
        }

        if (!chatId) {
            console.warn(`[Bot] Foydalanuvchi uchun chatId topilmadi: ${normalizedPhone}`);
            return;
        }

        await bot.telegram.sendMessage(chatId, `Sizning tasdiqlash kodingiz: ${code}`);
    } catch (error) {
        console.error('[Bot] sendVerificationCode xatosi:', error);
    }
}
