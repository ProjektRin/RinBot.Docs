# 签到 <Badge type="danger" text="开发中" vertical="top"/>

提供签到功能。

## 签到

签到来获取内存和经验值，并且获得本日的运势。

每日只能签到一次，每日生成的运势结果是唯一的。

### 命令格式

```:no-line-numbers
/sign
/打卡
/签到
```

<ClientOnly>
    <neko-box :messages="[
        { position: 'right', msg: '/sign' },
        { position: 'left', chain: [{ reply: '/sign' }, { msg: '[Sign]\nAkulaKirov\n打卡成功 你是今天第 114 个打卡的.\n经验+ 5 exp.\n内存+ 841 KB.\n\n今天的运势是: 吉\n是吉不是寄哦~\n\n今天的塔罗牌是: 节欲 正位' }, { img: '/images/tarot/tarot_01.jpg' }, { msg: '控制、平和、渐入佳境、良好家庭、实际、克制欲望便达成愿望、逐渐加深的爱\n\n结果仅供参考, 自己的命运要自己把握哦(ﾉﾟ▽ﾟ)ﾉ'}] }
    ]">
    </neko-box>
</ClientOnly>