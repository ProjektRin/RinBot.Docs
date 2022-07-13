# 互动 <Badge type="danger" text="开发中" vertical="top"/>

各种和 RinBot 相关的互动

## 戳一戳回复

RinBot 被戳一戳时回复一段文字或者图片

<ClientOnly>
    <neko-box :messages="[
        { position: 'center', msg: '你 👉戳了戳 铃酱' },
        { position: 'left', msg: '铃才不是你的电子宠物(//>︿<)' },
        { position: 'center', msg: '你 👉戳了戳 铃酱' },
        { position: 'left', chain: [{ img: '/images/interact/a_b30.gif' }] }
    ]">
    </neko-box>
</ClientOnly>