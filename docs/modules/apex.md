# Apex Legends <Badge type="tip" text="稳定" vertical="top"/>

提供各项和 Apex Legends 相关的工具。

目前所有数据只提供 PC 端玩家数据。

:::warning
Apex Legends 是 Electronic Arts 的注册商标。商标是其各自所有者的财产。游戏材料的版权归 Electronic Arts 所有。Electronic Arts 没有认可也不对本项目或其内容负责。
:::

## 主命令

这是 Apex Legends 功能的主命令，所有 Apex Legends 功能都要通过它来触发。

### 命令格式

```:no-line-numbers
/apex [<subcommand>]
```

| 参数 |  名称  |  类型  |  描述  |  必要  |
|:----:|:----:|:----:|:----:|:----:|
| subcommand |  子命令  |  string  |  参见下文  |  是  |

:::tip
如果不指定任何参数，该功能的行为相当于[查看玩家数据](#查看玩家数据)。
:::

## 绑定 Apex Legends 账户

将当前账号与一个 Apex Legends 账户绑定

::: warning
一个账号只能绑定一个 Apex Legends 账户。
:::

### 命令格式

```:no-line-numbers
/apex bind <userName>
```
| 参数 |  名称  |  类型  |  描述  |  必要  |
|:----:|:----:|:----:|:----:|:----:|
| userName |  玩家名称  |  string  |  需要绑定的玩家名称  |  是  |

:::tip
强烈推荐在使用 Apex Legends 功能之前进行 Apex Legends 账户绑定。

如此一来将省去使用其他功能时需要输入玩家名称的操作。
:::

## 解绑 Apex Legends 账户

将当前账号与所绑定的 Apex Legends 账户解绑

### 命令格式

```:no-line-numbers
/apex unbind
```

## 玩家数据

查看玩家的排位分数、所选传奇、追踪器等数据。

### 命令格式

```:no-line-numbers
/apex status [<userName>]
/apex stat [<userName>]
```

| 参数 |  名称  |  类型  |  描述  |  必要  |
|:----:|:----:|:----:|:----:|:----:|
| userName |  玩家名称  |  string  |  需要查询的玩家名称  |  否  |

:::tip
如果使用过[绑定 Apex Legends 账户](#绑定-apex-legends-账户)，则不需要手动指定目标玩家名称。

除非你需要替他人查询。
:::

## 最低猎杀分数

查询需要达到 Apex 猎杀者所需要的最低排位分数

### 命令格式

```:no-line-numbers
/apex predator
/apex 猎杀
/apex 冲猎
```