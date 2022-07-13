# 使用命令

RinBot 使用**类命令行交互界面**的方式来解析用户输入的命令。

简单来说，RinBot 只会处理与预注册的命令相符合的消息。

## 匹配方式

RinBot 使用的命令匹配方式有以下几种:
- 开头匹配
- 包含匹配
- 完全匹配
- 正则表达式匹配

当然，用户并不需要记住这些。只需要记住命令的[基本格式](#基本格式)即可。

## 基本格式

RinBot 命令的基本命令格式分为三个部分：

* 命令提示符
* 命令名称
* 命令参数

形如以下样例：

```:no-line-numbers
/command <arg> <argA/argB> [-opt <arg>] [<optArg>]
```

其中，`/` 为命令提示符，`command` 为命令名称，`<arg>`、`<argA/argB>`、`[-opt <arg>]` 和 `[<optArg>]` 均为命令参数。

参数与命令之间、参数与参数之间需要用空格分开。

但由于某些神秘的原因(懒)，参数与命令之间的空格有时可以省略掉。大多数情况下这并不会影响命令的使用，但还是建议加上空格。

目前可用的命令提示符有以下几种：
* 斜杠 `/`
* 在群聊中@RinBot `@铃酱`

`<arg>`、`<argA/argB>`、`[-opt <arg>]` 和 `[<optArg>]` 中的 `<>` 与 `[]` 是参数类型的标志。

使用 `<>` 包含的为必要参数，`[<>]` 为可选参数。

`<argA/argB>` 中的 `/` 为任选标志，代表该位置的参数可以是 `argA` 或 `argB` 中的任意一个。

`[-opt <arg>]` 中的 `-opt` 为选项标志，这个标志是用于开启某个选项或者指示后方的参数对应命令中的哪个参数。使用时也需要将 `-opt` 一并输入。

::: tip
使用时注意不要将 `<>`、`[]` 和 `/` 带进命令中
:::
::: warning
使用时注意不要将 `<>`、`[]` 和 `/` 带进命令中
:::
::: danger
使用时注意不要将 `<>`、`[]` 和 `/` 带进命令中

重要的事情说三遍，真的有太多人这么做了，我哭了，呜呜
:::

## 特殊格式

部分命令的解析格式可能不遵守上述的格式，称之为特殊格式。形如下方：

```:no-line-numbers
铃酱来点xx的色图
@铃酱 明天xx天气怎么样
```

并不是每个命令都会有其特殊格式，它们可能是某个命令的变体或替代格式，目的是为了简化命令格式，方便调用。

## 使用示例

部分命令中可能会存在类似下图的命令示例图，它将会模拟实际使用场景下 RinBot 的交互和回复。

<ClientOnly>
    <neko-box :messages="[
        { position: 'right', msg: '这是一条指令示例' },
        { position: 'left', msg: '这是bot可能的输出结果' },
        { position: 'right', msg: '这又是一条指令示例' },
        { position: 'left', chain: [{ reply: '这又是一条指令示例' }, { msg: '这是bot可能的回复' }] },
        { position: 'center', msg: '你 👉戳了戳 铃酱' },
        { position: 'left', msg: '这是bot对戳一戳事件可能的输出' },
        { position: 'right', msg: '这是可能产生复杂输出的指令' },
        { position: 'left', chain: [{ reply: '这是可能产生复杂输出的指令' }, { at: '@user' }, { img: '/images/example_1.gif' }, { msg: '谔谔' }] },
    ]">
    </neko-box>
</ClientOnly>

> 该组件使用了由 [InariAimu](https://github.com/InariAimu) 提供的 [NekoBox.vue](https://github.com/InariAimu/AimuBot.Docs/blob/main/docs/.vuepress/components/NekoBox.vue).