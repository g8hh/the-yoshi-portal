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
    "(Permanent) blessings are always in effect, but gain power while the blessing is active.": "（永久）祝福总是有效的，但在祝福生效时获得力量。",
    "upgrades": "升级",
    "Unlock a new unlock button": "解锁新的解锁按钮",
    "Unlock alterations": "解锁改动",
    "Unlock autobuy for doublers and automators": "解锁倍增器和自动机的自动购买",
    "Unlock blessings": "解锁祝福",
    "Unlock capitalism": "解锁资本主义",
    "Unlock new capitalism upgrades (permanent)": "解锁新的资本主义升级（永久）",
    "Unlock portal automators": "解锁 传送门自动器",
    "Unlock R&D": "解锁 R&D",
    "Yoshis": "耀西",
    "Yoshis (": "耀西 (",
    "Yoshis boost tachyon gain": "耀西 提升 超光速粒子 增益",
    "Yoshis boost yoshis/second": "耀西 提升 耀西/秒",
    "Yoshis per click": "耀西 每次点击",
    "Yoshis per second": "耀西每秒",
    "Yoshis)": "耀西）",
    "You get": "你得到",
    "You Win": "你赢了",
    "Your yoshis have evaded their taxes": "你的 yoshi 逃税了",
    "WARNING: Entering/exiting an alteration resets your Yoshis, Tachyons, Money, and most of their respective upgrades.": "警告：进入/退出更改会重置您的 耀西、超光速粒子、金钱 以及它们各自的大部分升级。",
    "Double money gain": "双倍金钱收益",
    "Doubler price increase is lower": "双倍价格涨幅更低",
    "Doublers are 80% cheaper": "倍增器便宜 80%",
    "Doublers are 80% cheaper again": "倍增器再次便宜 80%",
    "Doubling money gain is 80% cheaper": "加倍金钱收益便宜 80%",
    "Doubling money gain is 80% cheaper again": "加倍的金钱收益再次便宜了 80%",
    "Each doubler gives 15 more free automators": "每个加倍器提供 15 个以上的免费自动机",
    "Each doubler gives 3 free automators": "每个倍增器提供 3 个免费的自动机",
    "Each doubler gives 3 more free automators": "每个倍增器提供 3 个以上的免费自动机",
    "End current alteration": "结束当前更改",
    "Exponentiate Yoshi gain based on total light coins": "根据总光币指数化 Yoshi 增益",
    "Hard reset": "硬重置",
    "I want to go back!": "我想回去！",
    "Increase max for capitalism buttons 2 and 3": "增加资本主义按钮 2 和 3 的最大值",
    "Increase tachyon gain": "增加超光速粒子增益",
    "Increase Yoshi gain": "增加耀西增益",
    "Keep automators tab on reset": "保持自动机选项卡处于重置状态",
    "Keep one automator upon rewind": "倒带时保留一台自动机",
    "Lets you pull 25% of Yoshis/second each click": "每次点击让你拉 25% 的 耀西/秒",
    "Light Blue Yoshi's blessing increases 3x as fast": "浅蓝耀西的祝福速度提升 3 倍",
    "Money boosts Yoshi gain": "金钱提升了耀西的收益",
    "Money increases blessing time gain": "金钱增加祝福时间增益",
    "Money increases money gain": "金钱增加金钱收益",
    "Multiply tachyon gain by 20": "将超光速粒子增益乘以 20",
    "Multiply Yoshi gain by 1.000e1,000,000": "将 Yoshi 收益乘以 1.000e1,000,000",
    "Nice one.": "好东西。",
    "None": "没有任何",
    "Options": "选项",
    "Orange Yoshi's Blessing is 2x as powerful": "橙色耀西的祝福是 2 倍强大",
    "Portal": "传送门",
    "Pull a Yoshi through the portal": "通过传送门拉一个耀西",
    "pulling": "拉",
    "Red blessing upgrade 3 no longer decreases blessing time": "红色祝福升级3不再减少祝福时间",
    "Red Yoshi's Blessing": "红耀西的祝福",
    "Reset blessing": "重置祝福",
    "Rewind time to gain": "倒带时间获得",
    "seconds of blessing time": "几秒的祝福时间",
    "Skip": "跳过",
    "spare light coins": "备用轻硬币",
    "Spare light coins boost money gain": "备用轻硬币增加金钱收益",
    "Spirit Phone requirement is square rooted": "精灵手机 要求是平方根",
    "Tachyon gain is exponentiated by 1.2": "超光速粒子增益乘以 1.2",
    "tachyons": "超光速粒子",
    "Take over the world": "征服世界",
    "The Yoshi Portal": "耀西门户",
    "Time Machine": "时间机器",
    "times, giving you": "次，给你",
    "total, next at": "总计，接下来",
    "total)": "总计）",
    "Triple tachyon gain": "三倍超光速粒子增益",
    "Turn autobuy off": "关闭自动购买",
    "Unlock \"buy max\" for regular upgrades": "解锁“buy max”以进行定期升级",
    "Unlock 3 more tachyon upgrades": "解锁另外 3 个超光速粒子升级",
    "Unlock 3 more upgrades": "解锁另外 3 个升级",
    "Unlock 4 more tachyon upgrades": "解锁另外 4 个超光速粒子升级",
    "Yoshi gain is exponentiated by 1.4": "Yoshi 增益乘以 1.4",
    "Yoshi gain is harsly softcapped past e1.000e15": "耀西 的收益在 e1.000e15 之后被严格限制",
    "Yoshi gain is softcapped again past 1.000e1,000,000": "耀西 收益再次突破 1.000e1,000,000",
    "Yoshi gain is softcapped AGAIN past 1.000e50,000,000": "耀西 的收益再次超过 1.000e50,000,000",
    "Yoshi gain is softcapped past 1.000e1,000": "耀西 收益被软上限超过 1.000e1,000",
    "Yoshis (": "耀西 (",
    "(Temporary)": "（临时）",
    "(Temporary) blessings only take effect while the blessing is active.": "（临时）祝福仅在祝福激活时生效。",
    "/second (Based on log(Yoshis))": "/秒（基于 log(耀西)",
    "/second)": "/秒)",
    "$$$ CAPITALISM $$$": "$$$ 资本主义 $$$",
    "Activate all alterations at once,": "一次激活所有改动，",
    "All permanent blessings increase 3x as fast": "所有永久祝福的速度增加 3 倍",
    "Alterations": "改动",
    "and Pink Yoshi's blessing increases 2x as fast": "和 粉色耀西 的祝福速度增加 2 倍",
    "Autobuy money buyables once/second": "自动购买 金钱可购买 一次/秒",
    "Automatically gain 100% of tachyon gain every second": "每秒自动获得 100% 的快子增益",
    "automators,": "自动化设备，",
    "Blessing power/gain increases with more blessing time.": "祝福的力量/增益随着祝福时间的增加而增加。",
    "Blessing time always decreases, but multiply money gain by 10": "祝福时间总是减少，但将金钱收益乘以 10",
    "Blessing time always decreases, but Purple Yoshi's blessing increases 3x as fast": "祝福时间总是减少，但紫耀西的祝福速度增加 3 倍",
    "Blessing upgrade 11 no longer decreases blessing time": "祝福升级11不再减少祝福时间",
    "Blessings": "祝福",
    "Blue Yoshi's blessing increases 4x as fast,": "蓝耀西的加持速度提升 4 倍，",
    "Boost yoshis/second based on total tachyons": "根据总快子提升 耀西/秒",
    "Boost yoshis/second based on unspent tachyons": "基于未使用的快子提高 耀西/秒",
    "Boosts Yoshi Gain.": "提升耀西增益。",
    "but gain a massive Yoshi boost": "但获得巨大的耀西提升",
    "Buy an automator": "买一台自动机",
    "Buy max upgrades": "购买最大升级",
    "Capitalism": "资本主义",
    "Complete alteration": "彻底改变",
    "Costs": "费用",
    "Disable autosave": "禁用自动保存",
    "Discord server": "Discord服务器",
    "Don't. Don't do this. This is a bad idea.": "不。 不要这样做。 这是一个坏主意。",
    "Double automator power": "双倍自动器效率",
    "Double blessing time gain": "双倍加持时间增益",
    "Current alteration:": "当前改动：",
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
    // 图标代码，不能汉化
    "Jacorb's Games": "Jacorb's Games",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "By Jacorb90": "By Jacorb90",
    "content_copy": "content_copy",
    "library_books": "library_books",
    "discord": "discord",
    "drag_handle": "drag_handle",
    "edit": "edit",
    "forum": "forum",
    "content_paste": "content_paste",
    "delete": "delete",
    "info": "info",
    "settings": "settings",

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
    'QQ群号:': 'QQ群号:',
    '* 启用后台游戏': '* 启用后台游戏',
    '更多同类游戏:': '更多同类游戏:',
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
    "\t": "\t",
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
    "Upgrade ": "升级 ",
    "Costs $": "成本 $",
    "Currently x^": "当前 x^",
    "Currently x*": "当前 x*",
    "": "",
    "": "",
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
    "\t": "\t",
    "(hardcapped)": "(硬上限)",
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
    /^([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)\-([\d\.]+)\-([\d\.]+)$/,
    /^([\d\.]+)e(\d+)$/,
    /^([\d\.]+)$/,
    /^\(([\d\.]+)\%\)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)K$/,
    /^([\d\.]+)M$/,
    /^([\d\.]+)B$/,
    /^([\d\.]+) K$/,
    /^([\d\.]+) M$/,
    /^([\d\.]+) B$/,
    /^([\d\.]+)s$/,
    /^([\d\.]+)x$/,
    /^x([\d\.]+)$/,
    /^([\d\.,]+)$/,
    /^\+([\d\.,]+)$/,
    /^\-([\d\.,]+)$/,
    /^([\d\.,]+)x$/,
    /^x([\d\.,]+)$/,
    /^([\d\.,]+) \/ ([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^e([\d\.]+)e([\d\.,]+)$/,
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
    [/^Costs (.+) tachyon$/, '成本 $1 超光速粒子'],
    [/^Costs (.+) tachyons$/, '成本 $1 超光速粒子'],
    [/^Costs (.+) Yoshis$/, '成本 $1 耀西'],
	[/^([\d\.]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+)e([\d\.,]+)\/sec$/, '$1e$2\/秒'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^([\d\.]+)e([\d\.,]+) points$/, '$1e$2 点数'],
    [/^([\d\.]+) elves$/, '$1 精灵'],
    [/^([\d\.]+)d ([\d\.]+)h ([\d\.]+)m$/, '$1天 $2小时 $3分'],
    [/^([\d\.]+)e([\d\.,]+) elves$/, '$1e$2 精灵'],
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^\*(.+) to electricity gain$/, '\*$1 到电力增益'],
    [/^Cost: (.+) points$/, '成本：$1 点数'],
    [/^Req: (.+) elves$/, '要求：$1 精灵'],
    [/^Req: (.+) \/ (.+) elves$/, '要求：$1 \/ $2 精灵'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);