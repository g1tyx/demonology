/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com
 @idle games : http://www.gityx.com
 @QQ Group : 627141737

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Save': '保存',
    'Export': '导出',
    'Import': '导入',
    'Settings': '设置',
    'Achievements': '成就',
    'Statistics': '统计',
    'Changelog': '更新日志',
    'Hotkeys': '快捷键',
    'ALL': '全部',
    'Default': '默认',
    'AUTO': '自动',
    'default': '默认',
    "points": "点数",
    "Reset for +": "重置得到 + ",
    "Currently": "当前",
    "Effect": "效果",
    "Cost": "成本",
    "Goal:": "目标:",
    "Reward": "奖励",
    "Start": "开始",
    "Exit Early": "提前退出",
    "Finish": "完成",
    "Milestone Gotten!": "获得里程碑！",
    "Milestones": "里程碑",
    "Completed": "已完成",
    "Achievement Gotten!": "成就达成！",
    "Who am I?": "我是谁？",
    "About": "关于",
    "Hunt": "狩猎",
    "Netherworld": "冥界",
    "Souls": "灵魂",
    "Story": "故事",
    "The sky is void, the earth is grey": "天空是空的，大地是灰色的",
    "You crave the body of a prey": "你渴望猎物的身体",
    "A prey stays still, soon a minion": "猎物静止不动，很快就变成仆从了",
    "A soul remains, so does your thirst": "灵魂还在，你的渴望也一样",
    "and": "和",
    "And many other incremental games who gave me some inspiration": "以及许多其他给我一些启发的增量游戏",
    "Awakening": "觉醒",
    "Credits and inspirations": "学分和灵感",
    "Deepak K Vijayan": "迪帕克·维贾扬",
    "Demonology is an incremental game I build on my spare time. This is my first game, so I'm learning a lot. It isn't stable, it will contain bugs, and your saves might become incompatible with future versions.": "恶魔学是我在业余时间建立的增量游戏。这是我的第一场比赛，所以我学到了很多东西。它不稳定，会包含错误，并且您的保存可能与未来版本不兼容。",
    "entropyqueen_": "熵女王_",
    "for the body font": "对于正文字体",
    "for the feedback": "对于反馈",
    "for the flame animation": "对于火焰动画",
    "for the math": "对于数学",
    "for the title font": "对于标题字体",
    "Gathering souls in the process": "在这个过程中聚集灵魂",
    "Grimoire Incremental": "魔典增量",
    "Hard reset": "硬重置",
    "Hunt power": "狩猎力量",
    "Hunted prey": "猎杀的猎物",
    "Hunts": "狩猎",
    "IM Fell English SC": "IM Fell 英语 SC",
    "In a motion, you kill your first": "在一个动作中，你杀死你的第一个",
    "Key(s)": "按键",
    "Keyboard shortcuts": "键盘快捷键",
    "Legion": "军团",
    "Legion power": "军团力量",
    "Max (": "最大 （",
    "Minion power": "仆从力量",
    "Minions": "仆从",
    "Minions power": "仆从力量",
    "Occultist power": "术士力量",
    "Occultists": "术士",
    "open-source": "开源的",
    "Purchase all available upgrades": "购买所有可用的升级",
    "Purchase max minions": "购买最大仆从",
    "Purchase max occultists": "购买最大术士",
    "Purchased upgrades": "购买的升级",
    "QQ群号:": "QQ群号：",
    "Redditors from r/incremental_games": "来自 r/incremental_games 的 Redditors",
    "Reset": "重启",
    "Reset all your progress and delete all your data. Proceed with caution, this is irreversible. You will be asked for confirmation.": "重置所有进度并删除所有数据。谨慎行事，这是不可逆转的。您将被要求确认。",
    "Roboto Slab": "机器人平板",
    "Shack_Man": "Shack_Man",
    "Show About tab": "显示关于选项卡",
    "Show Netherworld tab": "显示冥界标签",
    "Show Settings tab": "显示设置选项卡",
    "Show Statistics tab": "显示统计选项卡",
    "Show Story tab": "显示故事选项卡",
    "Souls let you expand your legion and purchase upgrade.": "灵魂让你扩大你的军团和购买升级。",
    "Souls/second": "灵魂/秒",
    "The game itself is free and": "游戏本身是免费的",
    "Turn prey into Minions": "把猎物变成仆从",
    "Witness the birth of your legion": "见证你的军团的诞生",
    "You find a whole world to consume": "你会发现整个世界可以消费",
    "You move around, spreading your doom": "你四处走动，传播你的厄运",
    "Your armies advance, relentless": "你的军队前进，无情",
    "Your hunt power determine how much souls you gather with each hunt.": "你的狩猎能力决定了你每次狩猎收集了多少灵魂。",
    "Your minions assist you during your hunt.": "你的爪牙会在你的狩猎过程中帮助你。",
    "Your power": "你的力量",
    "Hunt · Hounds": "狩猎 · 猎犬",
    "Increase hunt power by 25 %": "增加 25 % 的狩猎能力",
    "Increase minion power by 1": "使仆从力量增加 1",
    "Fangs": "獠牙",
    "Purchase for": "购买",
    "Show active upgrades": "显示已买升级",
    "Show available upgrades": "显示可用升级",
    "Upgrades": "升级",
    "You haven't purchased any upgrade yet.": "您还没有购买任何升级。",
    "A new ambition eats your core:": "一个新的野心吞噬了你的核心：",
    "Demonic olfaction": "恶魔嗅觉",
    "Buy all": "购买所有",
    "Hundreds of souls roam the ether": "数百个灵魂在以太中漫游",
    "Increase occultists power by 25 %": "增加术士力量 25 %",
    "Claws": "爪子",
    "Horns": "角",
    "Tails": "尾巴",
    "No available upgrades. Try to get more souls or expand your legion to unlock new upgrades.": "没有可用的升级。 尝试获得更多灵魂或扩大您的军团以解锁新升级。",
    "Hidden signs": "隐藏的迹象",
    "Raise Occultists": "培养术士",
    "They also gather souls passively through your occultists.": "他们还通过你的术士被动地收集灵魂。",
    "Two worlds flow into each other": "两个世界相互流动",
    "Your nightmares need an open door": "你的噩梦需要一扇敞开的门",
    "Your occultists channel your legion's power into the mortal realm, granting you souls passively, each second.": "你的术士将你军团的力量引导到凡人领域，每一秒都被动地赋予你灵魂。",
    "Your occultists gather souls each second.": "你的术士每秒都在聚集灵魂。",
    "Increase occultists power by 100 %": "提高术士力量 100%",
    "Dark rituals": "黑暗仪式",
    "Secret gathering": "秘密聚会",
    "Wings": "翅膀",
    "Each one of your occultists multiply your minions power by 10 %": "你的每一个术士都会将你的仆从力量乘以 10 %",
    "Increase hunt power by 50 %": "增加 50 % 的狩猎能力",
    "Immoral support": "不道德的支持",
    "Your plans shall bind a thousand slaves": "你的计划将束缚一千个奴隶",
    "Your wrath shall fill a million graves": "你的愤怒将填满一百万个坟墓",
    "A prey dies for every soul gathered.": "每个聚集的灵魂都会有一个猎物死亡。",
    "Demonic gates": "恶魔之门",
    "Demonic lore": "恶魔传说",
    "Each one of your occultists multiply your minions power by 65 %": "你的每一个术士都会使你的仆从力量增加 65 %",
    "Increase Immoral support power by 50 %": "增加不道德支持力 50 %",
    "Increase occultists power by 50 %": "增加术士力量 50 %",
    "Maybe you are going too fast?": "也许你走得太快了？",
    "Prey": "猎物",
    "Very soon, you will kill the last": "很快，你会杀死最后一个",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",

    //树游戏
    'Loading...': '加载中...',
    'ALWAYS': '一直',
    'HARD RESET': '硬重置',
    'Export to clipboard': '导出到剪切板',
    'INCOMPLETE': '不完整',
    'HIDDEN': '隐藏',
    'AUTOMATION': '自动',
    'NEVER': '从不',
    'ON': '打开',
    'OFF': '关闭',
    'SHOWN': '显示',
    'Play Again': '再次游戏',
    'Keep Going': '继续',
    'The Modding Tree Discord': '模型树Discord',
    'You have': '你有',
    'It took you {{formatTime(player.timePlayed)}} to beat the game.': '花费了 {{formatTime(player.timePlayed)}} 时间去通关游戏.',
    'Congratulations! You have reached the end and beaten this game, but for now...': '恭喜你！ 您已经结束并通关了本游戏，但就目前而言...',
    'Main Prestige Tree server': '主声望树服务器',
    'Reach {{formatWhole(ENDGAME)}} to beat the game!': '达到 {{formatWhole(ENDGAME)}} 去通关游戏!',
    "Loading... (If this takes too long it means there was a serious error!": "正在加载...（如果这花费的时间太长，则表示存在严重错误！",
    'Loading... (If this takes too long it means there was a serious error!)←': '正在加载...（如果时间太长，则表示存在严重错误！）←',
    'Main\n\t\t\t\tPrestige Tree server': '主\n\t\t\t\t声望树服务器',
    'The Modding Tree\n\t\t\t\t\t\t\tDiscord': '模型树\n\t\t\t\t\t\t\tDiscord',
    'Please check the Discord to see if there are new content updates!': '请检查 Discord 以查看是否有新的内容更新！',
    'aqua': '水色',
    'AUTOMATION, INCOMPLETE': '自动化，不完整',
    'LAST, AUTO, INCOMPLETE': '最后，自动，不完整',
    'NONE': '无',
    'P: Reset for': 'P: 重置获得',
    'Git游戏': 'Git游戏',
    'QQ群号': 'QQ群号',
    'x': 'x',
    'u': 'u',
    's': 's',
    'o': 'o',
    'm': 'm',
    'h': 'h',
    "ctrl+m": "ctrl+m",
    "ctrl+o": "ctrl+o",
    "ctrl+shift+m": "ctrl+shift+m",
    "ctrl+shift+o": "Ctrl+Shift+O",
    "shift+m": "shift+m",
    "shift+o": "shift+o",
    '': '',
    '': '',
    '': '',

}


//需处理的前缀
var cnPrefix = {
    "\n": "",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": "",
    //树游戏
    "\t\t\t": "\t\t\t",
    "\n\n\t\t": "\n\n\t\t",
    "\n\t\t": "\n\t\t",
    "Show Milestones: ": "显示里程碑：",
    "Autosave: ": "自动保存: ",
    "Offline Prod: ": "离线生产: ",
    "Completed Challenges: ": "完成的挑战: ",
    "High-Quality Tree: ": "高质量树贴图: ",
    "Offline Time: ": "离线时间: ",
    "Theme: ": "主题: ",
    "Anti-Epilepsy Mode: ": "抗癫痫模式：",
    "In-line Exponent: ": "直列指数：",
    "Single-Tab Mode: ": "单标签模式：",
    "Time Played: ": "已玩时长：",
    "Shift-Click to Toggle Tooltips: ": "Shift-单击以切换工具提示：",
    "Increase minion power by ": "提高仆从力量 ",
    "Minions · ": "仆从 · ",
    "Avatar · ": "头像 · ",
    "Occultists · ": "术士 · ",
    "Legion · ": "军团 · ",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需处理的后缀
var cnPostfix = {
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": " ",
    "\n": "",
    "\n\t\t\t": "\n\t\t\t",
    "\t\t\n\t\t": "\t\t\n\t\t",
    "\t\t\t\t": "\t\t\t\t",
    "\n\t\t": "\n\t\t",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^(\d+)$/,
    /^\s*$/, //纯空格
    /^([\d\.]+)e(\d+)$/,
    /^([\d\.]+)$/,
    /^([\d\.]+) K$/,
    /^([\d\.]+) M$/,
    /^([\d\.]+) B$/,
    /^([\d\.]+)s$/,
    /^([\d\.]+)x$/,
    /^x([\d\.]+)$/,
    /^([\d\.,]+)$/,
    /^([\d\.,]+)x$/,
    /^x([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^x([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)x$/,
    /^[\u4E00-\u9FA5]+$/
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
//换行加空格：\n(.+)
var cnRegReplace = new Map([
    [/^([\d\.]+) hours ([\d\.]+) minutes ([\d\.]+) seconds$/, '$1 小时 $2 分钟 $3 秒'],
    [/^You are gaining (.+) elves per second$/, '你每秒获得 $1 精灵'],
    [/^You have (.+) points$/, '你有 $1 点数'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
    [/^Purchase (.+) minion$/, '购买 $1 仆从'],
    [/^Purchase (.+) minions$/, '购买 $1 仆从'],
    [/^Purchase (.+) occultist$/, '购买 $1 术士'],
    [/^Purchase (.+) occultists$/, '购买 $1 术士'],
	[/^([\d\.]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+)e([\d\.,]+)\/sec$/, '$1e$2\/秒'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^([\d\.]+)e([\d\.,]+) points$/, '$1e$2 点数'],
    [/^([\d\.]+) elves$/, '$1 精灵'],
    [/^([\d\.]+)e([\d\.,]+) elves$/, '$1e$2 精灵'],
    [/^([\d\.,]+) for$/, '$1 花费'],
    [/^\*(.+) to electricity gain$/, '\*$1 到电力增益'],
    [/^Cost: (.+) points$/, '成本：$1 点数'],
    [/^Req: (.+) \/ (.+) elves$/, '成本：$1 \/ $2 精灵'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);