# Arcaea

提供各项和 Arcaea 相关的工具。

本功能使用了 ArcaeaUnlimitedAPI。

:::warning
Arcaea 是 Lowiro 的注册商标。商标是其各自所有者的财产。游戏材料的版权归 Lowiro 所有。Lowiro 没有认可也不对本项目或其内容负责。
:::

:::danger
使用本功能将违反 Arcaea使用条款 中的 3.2-4 和 3.2-6，以及 Arcaea二次创作管理条例。

使用本功能将视为您自愿承担一切因使用本功能而造成的损失，并知悉 RinBot 不予承担任何责任。
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

将当前QQ号与一个 Arcaea 账户绑定

::: warning
一个QQ号只能绑定一个 Arcaea 账户。
:::

### 命令格式

```:no-line-numbers
/arc bind <usercode/username>
```
| 参数 |  名称  |  类型  |  描述  |  必要  |
|:----:|:----:|:----:|:----:|:----:|
| usercode |  好友代码  |  string  |  需要绑定的用户的好友代码  |  是  |
| username |  好友代码  |  string  |  需要绑定的用户的用户名  |  是  |

:::tip
强烈推荐在使用 Arcaea 功能之前进行 Arcaea 账户绑定。

如此一来将省去使用其他功能时需要输入好友代码的操作。
:::

## 解绑 Arcaea 账户

将当前QQ号与所绑定的 Arcaea 账户解绑

### 命令格式

```:no-line-numbers
/arc unbind
```

## B30成绩图

获取用户的B30成绩图

### 命令格式

```:no-line-numbers
/arc b30 [<usercode>]
```
| 参数 |  名称  |  类型  |  描述  |  必要  |
|:----:|:----:|:----:|:----:|:----:|
| usercode |  好友代码  |  string  |  需要生成B30成绩图的用户的好友代码  |  否  |

:::tip
如果使用过[绑定 Arcaea 账户](#绑定-arcaea-账户)，则不需要手动指定目标好友代码。

除非你需要替他人查询。
:::

## 最近游玩成绩图

获取用户的最近一次的游玩记录成绩图

### 命令格式

```:no-line-numbers
/arc recent [<usercode>]
```
| 参数 |  名称  |  类型  |  描述  |  必要  |
|:----:|:----:|:----:|:----:|:----:|
| usercode |  目标好友代码  |  string  |  需要生成最近游玩成绩图的用户的好友代码  |  否  |

:::tip
如果使用过[绑定 Arcaea 账户](#绑定-arcaea-账户)，则不需要手动指定目标好友代码。

除非你需要替他人查询。
:::

## 最佳游玩成绩图

获取用户的指定歌曲在指定难度下的最佳游玩记录成绩图

### 命令格式

```:no-line-numbers
/arc best <song> [<diff>]
```
| 参数 |  名称  |  类型  |  描述  |  必要  |
|:----:|:----:|:----:|:----:|:----:|
| song |  歌曲名字  |  string  |  可以是歌曲全名、内部sid或别名  |  是  |
| diff |  难度  |  string  |  必须是 PRS、PST、FTR、BYD 其中之一，留空则为游玩过的最高难度  |  否  |

## 歌曲铺面预览图

获取指定歌曲在指定难度下的平面化铺面预览图

### 命令格式

```:no-line-numbers
/arc chart <song> <diff>
```
| 参数 |  名称  |  类型  |  描述  |  必要  |
|:----:|:----:|:----:|:----:|:----:|
| song |  歌曲名字  |  string  |  可以是歌曲全名、内部sid或别名  |  是  |
| diff |  难度  |  string  |  必须是 PRS、PST、FTR、BYD 其中之一  |  是  |

## 歌曲信息

获取指定歌曲的相关信息

### 命令格式

```:no-line-numbers
/arc info <song>
/arc song <song>
```
| 参数 |  名称  |  类型  |  描述  |  必要  |
|:----:|:----:|:----:|:----:|:----:|
| song |  歌曲名字  |  string  |  可以是歌曲全名、内部sid或别名  |  是  |