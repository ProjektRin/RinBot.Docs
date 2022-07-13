# Arcaea <Badge type="tip" text="稳定" vertical="top"/>

提供各项和 Arcaea 相关的工具。

本模块使用了 ArcaeaUnlimitedAPI。

:::warning
Arcaea 是 Lowiro 的注册商标。商标是其各自所有者的财产。游戏材料的版权归 Lowiro 所有。Lowiro 没有认可也不对本项目或其内容负责。
:::

:::danger
使用本模块将违反 Arcaea 使用条款 中的 3.2-4 和 3.2-6，以及 Arcaea 二次创作管理条例。

使用本模块将视为您自愿承担一切因使用本模块而造成的损失，并知悉 RinBot 不予承担任何责任。
:::

:::tip
使用本模块将默认您允许 RinBot 收集/记录关于您的使用记录，包括但不限于 Arcaea 用户名、游玩记录等。

您的数据将用于历史 ptt 显示、最高分记录显示、推分建议等功能。

我们将使用行业安全标准来保存数据，并不会提供给任何第三方。
:::

## 主命令

这是 Arcaea 功能的主命令，所有 Arcaea 功能都要通过它来触发。

### 命令格式

```:no-line-numbers
/arc [<subcommand>]
/a [<subcommand>]
```

| 参数 |  名称  |  类型  |  描述  |  必要  |
|:----:|:----:|:----:|:----:|:----:|
| subcommand |  子命令  |  string  |  参见下文  |  否  |

:::tip
如果不指定任何参数，该功能的行为相当于[最近游玩成绩图](#最近游玩成绩图)。
:::

## 绑定 Arcaea 账户

将当前账号与一个 Arcaea 账户绑定

::: warning
一个账号只能绑定一个 Arcaea 账户。
:::

### 命令格式

```:no-line-numbers
/arc bind <userCode/username>
```
| 参数 |  名称  |  类型  |  描述  |  必要  |
|:----:|:----:|:----:|:----:|:----:|
| userCode |  好友代码  |  string  |  需要绑定的用户的好友代码  |  是  |
| username |  好友代码  |  string  |  需要绑定的用户的用户名  |  是  |

:::tip
强烈推荐在使用 Arcaea 功能之前进行 Arcaea 账户绑定。

如此一来将省去使用其他功能时需要输入好友代码的操作。
:::

<ClientOnly>
    <neko-box :messages="[
        { position: 'right', msg: '/a bind AkulaKirov' },
        { position: 'left', chain: [{ reply: '/a bind AkulaKirov' }, { msg: '[Arcaea]\n已成功绑定到用户\nAkulaKirov(435136335)' }] }
    ]">
    </neko-box>
</ClientOnly>

## 解绑 Arcaea 账户

将当前账号与所绑定的 Arcaea 账户解绑

### 命令格式

```:no-line-numbers
/arc unbind
```

<ClientOnly>
    <neko-box :messages="[
        { position: 'right', msg: '/a unbind' },
        { position: 'left', chain: [{ reply: '/a unbind' }, { msg: '[Arcaea]\n已解除绑定' }] }
    ]">
    </neko-box>
</ClientOnly>

## B30成绩图

获取用户的B30成绩图

### 命令格式

```:no-line-numbers
/arc b30 [<userCode>]
```

| 参数 |  名称  |  类型  |  描述  |  必要  |
|:----:|:----:|:----:|:----:|:----:|
| userCode |  目标好友代码  |  string  |  需要生成最近游玩成绩图的用户的好友代码  |  否  |

:::tip
如果使用过[绑定 Arcaea 账户](#绑定-arcaea-账户)，则不需要手动指定目标好友代码。

除非你需要替他人查询。
:::

<ClientOnly>
    <neko-box :messages="[
        { position: 'right', msg: '/a b30' },
        { position: 'left', chain: [{ reply: '/a b30' }, { msg: '[Arcaea]Best30' }, { img: '/images/arcaea/best30.jpg' }] }
    ]">
    </neko-box>
</ClientOnly>

## 最近游玩成绩图

获取用户的最近一次的游玩记录成绩图

### 命令格式

```:no-line-numbers
/arc recent [<userCode>]
```
| 参数 |  名称  |  类型  |  描述  |  必要  |
|:----:|:----:|:----:|:----:|:----:|
| userCode |  目标好友代码  |  string  |  需要生成最近游玩成绩图的用户的好友代码  |  否  |

:::tip
如果使用过[绑定 Arcaea 账户](#绑定-arcaea-账户)，则不需要手动指定目标好友代码。

除非你需要替他人查询。
:::

<ClientOnly>
    <neko-box :messages="[
        { position: 'right', msg: '/a b30' },
        { position: 'left', chain: [{ reply: '/a b30' }, { msg: '[Arcaea]Recent' }, { img: '/images/arcaea/recent.jpg' }] }
    ]">
    </neko-box>
</ClientOnly>

## 最佳游玩成绩图

获取用户的指定歌曲在指定难度下的最佳游玩记录成绩图

### 命令格式

```:no-line-numbers
/arc best <song> [<diff>]
/arc info <song> [<diff>]
```
| 参数 |  名称  |  类型  |  描述  |  必要  |
|:----:|:----:|:----:|:----:|:----:|
| song |  歌曲名字  |  string  |  可以是歌曲全名、内部sid或别名  |  是  |
| diff |  难度  |  string  |  必须是 PRS、PST、FTR、BYD 其中之一，留空则为游玩过的最高难度  |  否  |

<ClientOnly>
    <neko-box :messages="[
        { position: 'right', msg: '/a best 猫对立' },
        { position: 'left', chain: [{ reply: '/a best 猫对立' }, { msg: '[Arcaea]Best' }, { img: '/images/arcaea/best_01.jpg' }] },
        { position: 'right', msg: '/a best 猫对立 byd' },
        { position: 'left', chain: [{ reply: '/a best 猫对立 byd' }, { msg: '[Arcaea]Best' }, { img: '/images/arcaea/best_02.jpg' }] }
    ]">
    </neko-box>
</ClientOnly>

## 歌曲铺面预览图

获取指定歌曲在指定难度下的平面化铺面预览图

### 命令格式

```:no-line-numbers
/arc chart <song> [<diff>]
```
| 参数 |  名称  |  类型  |  描述  |  必要  |
|:----:|:----:|:----:|:----:|:----:|
| song |  歌曲名字  |  string  |  可以是歌曲全名、内部sid或别名  |  是  |
| diff |  难度  |  string  | 必须是 PRS、PST、FTR、BYD 其中之一，留空则为 FTR  |  否  |

<ClientOnly>
    <neko-box :messages="[
        { position: 'right', msg: '/a chart testify' },
        { position: 'left', chain: [{ reply: '/a chart testify' }, { msg: '[Arcaea]ChartPreview' }, { img: '/images/arcaea/chart_preview.jpg' }] }
    ]">
    </neko-box>
</ClientOnly>

## 歌曲信息

获取指定歌曲的相关信息

### 命令格式

```:no-line-numbers
/arc song <song>
/arc const <song>
```
| 参数 |  名称  |  类型  |  描述  |  必要  |
|:----:|:----:|:----:|:----:|:----:|
| song |  歌曲名字  |  string  |  可以是歌曲全名、内部sid或别名  |  是  |

<ClientOnly>
    <neko-box :messages="[
        { position: 'right', msg: '/a song 摔死' },
        { position: 'left', chain: [{ reply: '/a song 摔死' }, { msg: '[Arcaea]SongInfo' }, { img: '/images/arcaea/dropdead.jpg' }, { msg: '曲名: dropdead' }, { msg: 'BPM: 50' }, { msg: '曲包: Memory Archive (纷争之侧)' }, { msg: '  PST/PRS/FTR/BYD' }, { msg: '难度: 1/9/8/10' }, { msg: '定数: 1.5/9.5/9.1/10.5' }, { msg: '物量: 44/1323/823/1503' }] }
    ]">
    </neko-box>
</ClientOnly>

## 定数计算

计算指定定数在指定成绩下的结果

### 命令格式

```:no-line-numbers
/arc calc <rating> <score>
/arc calculate <rating> <score>
```
| 参数 |  名称  |  类型  |  描述  |  必要  |
|:----:|:----:|:----:|:----:|:----:|
| rating |  定数  |  float  |  要计算的定数  |  是  |
| score |  成绩  |  int  |  要计算的成绩  |  是  |

<ClientOnly>
    <neko-box :messages="[
        { position: 'right', msg: '/a calc 11 10114514' },
        { position: 'left', chain: [{ reply: '/a calc 11 10114514' }, { msg: '[Arcaea]Calculate\n11.0000 <> 10114514\n=> 13.0000' }] }
    ]">
    </neko-box>
</ClientOnly>