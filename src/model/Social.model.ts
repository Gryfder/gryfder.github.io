import BARQ_ICON from '@/assets/icon/social/barq.webp';
import BILIBILI_ICON from '@/assets/icon/social/bilibili.svg';
import BLUESKY_ICON from '@/assets/icon/social/bluesky-color.svg';
import BUMP_ICON from '@/assets/icon/social/bump.webp';
import DISCORD_ICON from '@/assets/icon/social/discord-color.svg';
import FURAFFINITY_ICON from '@/assets/icon/social/furaffinity.webp';
import INSTAGRAM_ICON from '@/assets/icon/social/instagram-color.png';
import REDNOTE_ICON from '@/assets/icon/social/rednote.webp';
import TELEGRAM_ICON from '@/assets/icon/social/telegram-color.svg';
import TWITTER_ICON from '@/assets/icon/social/twitter-color.svg';
import YOUTUBE_ICON from '@/assets/icon/social/youtube-color.svg';
import PFP_2_IMAGE from '@/assets/img/pfp-2.webp';
import PFP_3_IMAGE from '@/assets/img/pfp-3.jpg';
import PFP_1_IMAGE from '@/assets/img/pfp.webp';

export type SocialModel = {
  readonly icon: string;
  readonly title: string;
  readonly thumbnail?: string;
  readonly handler: string;
  readonly href: string;
};

export const SOCIALS: SocialModel[] = [
  {
    icon: YOUTUBE_ICON,
    thumbnail: PFP_2_IMAGE,
    title: 'Youtube',
    handler: '@Gryfder',
    href: 'https://www.youtube.com/@Gryfder',
  },
  {
    icon: TELEGRAM_ICON,
    thumbnail: PFP_1_IMAGE,
    title: 'Telegram',
    handler: '@Gryfder',
    href: 'http://t.me/Gryfder',
  },
  {
    icon: TWITTER_ICON,
    thumbnail: PFP_3_IMAGE,
    title: 'Twitter',
    handler: '@gryfder',
    href: 'https://x.com/gryfder',
  },
  {
    icon: BLUESKY_ICON,
    thumbnail: PFP_2_IMAGE,
    title: 'Bluesky',
    handler: '@gryfder.bsky.social',
    href: 'http://bsky.app/profile/gryfder.bsky.social',
  },
  {
    icon: DISCORD_ICON,
    thumbnail: PFP_1_IMAGE,
    title: 'Discrod',
    handler: '@gryfder',
    href: 'https://discordapp.com/users/530395478819602482',
  },
  {
    icon: INSTAGRAM_ICON,
    thumbnail: PFP_1_IMAGE,
    title: 'Instagram',
    handler: '@gryfderaven',
    href: 'https://www.instagram.com/gryfderaven',
  },
  {
    icon: REDNOTE_ICON,
    title: 'Xiaohongshu',
    handler: 'Gryfder',
    href: 'http://xhslink.com/m/5HxblmgdceW',
  },
  { icon: BILIBILI_ICON, title: 'Bilibili', handler: '閤屴怤德', href: 'https://b23.tv/JmyZSl2' },
  {
    icon: FURAFFINITY_ICON,
    title: 'Furaffinity',
    handler: 'Gryfder',
    href: 'https://www.furaffinity.net/user/gryfder/',
  },
  { icon: BARQ_ICON, title: 'Barq', handler: '@Gryfder', href: 'https://barq.app/@Gryfder' },
  {
    icon: BUMP_ICON,
    title: 'Bump',
    handler: 'GryfderDeficere',
    href: 'https://bumpmaps.com/i/jyp5IHp9KQmk',
  },
];
