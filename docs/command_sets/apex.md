# Apex

提供各项和 Apex legends 相关的工具。

本功能使用了 [Apex Legends Status](https://apexlegendsstatus.com/)。

:::warning
Apex Legends 是 Electronic Arts 的注册商标。商标是其各自所有者的财产。游戏材料的版权归 Electronic Arts 所有。Electronic Arts 没有认可也不对本网站或其内容负责。
:::

## 主命令

这是 Apex 功能的主命令，所有 Apex 功能都要通过它来触发。

### 命令格式

```:no-line-numbers
/apex [<subcommand>]
```

| 参数 |  名称  |  类型  |  描述  |  必要  |
|:----:|:----:|:----:|:----:|:----:|
| subcommand |  子命令  |  string  |  参见下文  |  否  |

:::tip
如果不指定任何参数，该功能的行为相当于[查询玩家信息](#查询玩家信息)。
:::

## 绑定 Apex Legends 账户

将当前QQ号与一个 Apex Legends 账户绑定

::: warning
一个QQ号只能绑定一个 Apex Legends 账户。
:::

### 命令格式

```:no-line-numbers
/apex bind <userid>
```
| 参数 |  名称  |  类型  |  描述  |  必要  |
|:----:|:----:|:----:|:----:|:----:|
| userid |  用户名  |  string  |  需要绑定的用户的 Origin 名字，**注意不是 Steam 名字**  |  是  |

:::tip
强烈推荐在使用 Apex 功能之前进行 Apex Legends 账户绑定。

如此一来将省去使用其他功能时需要输入好友代码的操作。
:::

## 解绑 Apex Legends 账户

将当前QQ号与所绑定的 Apex Legends 账户解绑

### 命令格式

```:no-line-numbers
/apex unbind
```


## 查询玩家信息

查询指定玩家的 Apex Legends 个人数据。

目前只能查询PC平台。

### 命令格式

```:no-line-numbers
/apex [<userid>]
```

| 参数 |  名称  |  类型  |  描述  |  必要  |
|:----:|:----:|:----:|:----:|:----:|
| userid |  用户名  |  string  |  用户的 Origin 名字，**注意不是 Steam 名字**  |  否  |

:::tip
如果使用过[绑定 Apex Legends 账户](#绑定-apex-legends-账户)，则不需要手动指定用户名。

除非你需要替他人查询。
:::

## 最低冲猎分数

查询当前的 Apex Legends 排位模式和竞技场模式段位能达到猎杀者的最低分数。

目前只能查询PC平台。

### 命令格式

```:no-line-numbers
/apex predator
/apex 猎杀
/apex 冲猎
```