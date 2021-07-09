import { MenuEntry } from '@heswap/uikit'
import { ContextApi } from 'contexts/Localization/types'

const config: (t: ContextApi['t']) => MenuEntry[] = (t) => [
  {
    label: t('Home'),
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: t('Trade'),
    icon: 'TradeIcon',
    items: [
      {
        label: t('Exchange'),
        href: 'http://101.36.111.81:3002/#/swap',
      },
      {
        label: t('Liquidity'),
        href: 'http://101.36.111.81:3002/#/pool',
      },
    ],
  },
  {
    label: t('Farms'),
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: t('Pools'),
    icon: 'PoolIcon',
    href: '/pools',
  },
  {
    label: t('Referrals'),
    icon: 'GroupsIcon',
    href: '/referrals',
  },
  {
    label: t('Dice'),
    icon: 'DiceIcon',
    items: [
      {
        label: 'LKCP',
        icon: 'LkcpIcon',
        href: '/dice?coin=LKCP',
      },
      {
        label: 'BNB',
        icon: 'BnbIcon',
        href: '/dice?coin=BNB',
      },
      {
        label: 'BUSD',
        icon: 'BusdIcon',
        href: '/dice?coin=BUSD',
      },
      {
        label: 'BTCB',
        icon: 'BtcbIcon',
        href: '/dice?coin=BTCB',
      },
      {
        label: 'ETH',
        icon: 'EthIcon',
        href: '/dice?coin=ETH',
      },
    ],
  },
  {
    label: t('More'),
    icon: 'MoreIcon',
    items: [
      {
        label: t('Github'),
        href: 'https://github.com/heswap',
      },
    ],
  },
]

export default config
