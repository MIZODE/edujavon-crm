import { bot } from './bot.service';

export async function startBot(): Promise<void> {
    if (!process.env.TELEGRAM_BOT_TOKEN) {
        console.warn('⚠️  TELEGRAM_BOT_TOKEN topilmadi. Bot ishga tushmadi.');
        return;
    }

    // Polling rejimida ishga tushirish
    await bot.launch();
    console.log('🤖 Telegram bot ishga tushdi (polling rejimi)');

    // Graceful shutdown
    process.once('SIGINT', () => bot.stop('SIGINT'));
    process.once('SIGTERM', () => bot.stop('SIGTERM'));
}
