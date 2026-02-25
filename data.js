// 真实可播放的视频数据
const videosData = {
    // 热门推荐视频
    recommended: [
        {
            id: 1,
            title: "【4K】自然风光：日出时分的山峦之美",
            cover: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=340&fit=crop",
            videoUrl: "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=164&oauth2_token_id=57447761",
            duration: "03:45",
            views: "125.3万",
            likes: "8.2万",
            date: "2024-01-15",
            upName: "自然纪录片频道",
            upAvatar: "https://i.pravatar.cc/100?img=1",
            upFollowers: "128万",
            description: "这是我在凌晨4点起床捕捉到的日出美景，山脉在晨光中如诗如画。摄于阿尔卑斯山区，希望能给大家带来内心的平静。",
            category: "life"
        },
        {
            id: 2,
            title: "编程教学：10分钟学会动画制作",
            cover: "https://images.unsplash.com/photo-1481487484168-9b995ecc1679?w=600&h=340&fit=crop",
            videoUrl: "https://player.vimeo.com/external/494266946.sd.mp4?s=688b56589a07bd2d0c90775439323f1fb23a9c4b&profile_id=164&oauth2_token_id=57447761",
            duration: "10:23",
            views: "89.6万",
            likes: "5.7万",
            date: "2024-01-12",
            upName: "代码小白",
            upAvatar: "https://i.pravatar.cc/100?img=2",
            upFollowers: "89万",
            description: "从零开始教你制作精美的动画效果，包含完整代码和讲解。适合初学者入门，欢迎收藏学习！",
            category: "tech"
        },
        {
            id: 3,
            title: "【原创】猫咪萌态合集：治愈系",
            cover: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&h=340&fit=crop",
            videoUrl: "https://player.vimeo.com/external/371435368.sd.mp4?s=d65c12d5257c6b9e908379c368b4352918977c0f&profile_id=164&oauth2_token_id=57447761",
            duration: "05:12",
            views: "256.7万",
            likes: "18.3万",
            date: "2024-01-10",
            upName: "萌宠星球",
            upAvatar: "https://i.pravatar.cc/100?img=3",
            upFollowers: "215万",
            description: "收集了各种猫咪的可爱瞬间，希望能治愈你一整天！如果你也喜欢猫咪，别忘了点赞关注~",
            category: "life"
        },
        {
            id: 4,
            title: "城市夜晚延时摄影：东京之行",
            cover: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=600&h=340&fit=crop",
            videoUrl: "https://player.vimeo.com/external/459460150.sd.mp4?s=0d86d19a1918f8b0b443036d0f5b1d0e2e3d2e4b&profile_id=164&oauth2_token_id=57447761",
            duration: "04:28",
            views: "67.8万",
            likes: "4.2万",
            date: "2024-01-08",
            upName: "旅行家小张",
            upAvatar: "https://i.pravatar.cc/100?img=4",
            upFollowers: "95万",
            description: "东京7天旅行的精华片段，在新宿、涩谷、六本木等地拍摄的夜景延时，感受城市的繁华与美丽。",
            category: "life"
        },
        {
            id: 5,
            title: "电子音乐制作入门：了解合成器",
            cover: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=600&h=340&fit=crop",
            videoUrl: "https://player.vimeo.com/external/494228377.sd.mp4?s=1a2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0&profile_id=164&oauth2_token_id=57447761",
            duration: "08:45",
            views: "45.2万",
            likes: "3.1万",
            date: "2024-01-05",
            upName: "音乐实验室",
            upAvatar: "https://i.pravatar.cc/100?img=5",
            upFollowers: "67万",
            description: "零基础学习电子音乐创作，从合成器的基本操作开始，一步步带你进入音乐制作的世界。",
            category: "music"
        },
        {
            id: 6,
            title: "【游戏实况】塞尔达传说：王国之泪",
            cover: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&h=340&fit=crop",
            videoUrl: "https://player.vimeo.com/external/371842583.sd.mp4?s=a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0&profile_id=164&oauth2_token_id=57447761",
            duration: "15:30",
            views: "334.5万",
            likes: "24.6万",
            date: "2024-01-03",
            upName: "游戏达人",
            upAvatar: "https://i.pravatar.cc/100?img=6",
            upFollowers: "178万",
            description: "塞尔达传说第三部游戏实况，展现全新的海拉鲁大陆玩法和剧情。全程无剧透，放心观看！",
            category: "game"
        },
        {
            id: 7,
            title: "厨艺教学：正宗川菜麻婆豆腐",
            cover: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&h=340&fit=crop",
            videoUrl: "https://player.vimeo.com/external/371842585.sd.mp4?s=b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1&profile_id=164&oauth2_token_id=57447761",
            duration: "12:18",
            views: "98.3万",
            likes: "7.8万",
            date: "2024-01-01",
            upName: "美食家小李",
            upAvatar: "https://i.pravatar.cc/100?img=7",
            upFollowers: "134万",
            description: "手把手教你做出正宗的麻婆豆腐，从选材到调料，每一步都有详细说明。川菜入门必修课！",
            category: "life"
        },
        {
            id: 8,
            title: "科技测评：最新款智能手机深度体验",
            cover: "https://images.unsplash.com/photo-1556656793-02769d12259a?w=600&h=340&fit=crop",
            videoUrl: "https://player.vimeo.com/external/371842590.sd.mp4?s=c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2&profile_id=164&oauth2_token_id=57447761",
            duration: "18:45",
            views: "145.7万",
            likes: "9.2万",
            date: "2023-12-28",
            upName: "数码评测君",
            upAvatar: "https://i.pravatar.cc/100?img=8",
            upFollowers: "159万",
            description: "全面深度测评最新的旗舰手机，包括性能、拍照、续航、充电等各个方面，帮你了解真实体验。",
            category: "tech"
        }
    ],

    // 动画区视频
    anime: [
        {
            id: 101,
            title: "【动画】樱花飘落的季节 MV制作",
            cover: "https://images.unsplash.com/photo-1522383225653-ed111181a951?w=600&h=340&fit=crop",
            videoUrl: "https://player.vimeo.com/external/371433847.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=164&oauth2_token_id=57447761",
            duration: "04:30",
            views: "78.4万",
            likes: "5.6万",
            date: "2024-01-14",
            upName: "樱华工作室",
            upAvatar: "https://i.pravatar.cc/100?img=11",
            upFollowers: "96万",
            description: "原创动画MV，讲述了一个关于青春和梦想的故事。画面精美，音乐动人，希望给大家带来感动。",
            category: "anime"
        },
        {
            id: 102,
            title: "【MAD】你的名字混剪版",
            cover: "https://images.unsplash.com/photo-1507400492013-162706c8c05e?w=600&h=340&fit=crop",
            videoUrl: "https://player.vimeo.com/external/494266948.sd.mp4?s=688b56589a07bd2d0c90775439323f1fb23a9c4b&profile_id=164&oauth2_token_id=57447761",
            duration: "03:52",
            views: "156.2万",
            likes: "11.3万",
            date: "2024-01-11",
            upName: "MAD大师",
            upAvatar: "https://i.pravatar.cc/100?img=12",
            upFollowers: "203万",
            description: "运用《你的名字》精彩片段制作的混剪视频，配上动人的BGM，希望唤起你的美好回忆。",
            category: "anime"
        },
        {
            id: 103,
            title: "【手绘动画】水彩画教学演示",
            cover: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=600&h=340&fit=crop",
            videoUrl: "https://player.vimeo.com/external/371435370.sd.mp4?s=d65c12d5257c6b9e908379c368b4352918977c0f&profile_id=164&oauth2_token_id=57447761",
            duration: "07:15",
            views: "34.7万",
            likes: "2.4万",
            date: "2024-01-09",
            upName: "绘画小课堂",
            upAvatar: "https://i.pravatar.cc/100?img=13",
            upFollowers: "45万",
            description: "从零开始教你使用水彩画技法完成一幅完整的作品，包含调色、上色等全过程演示。",
            category: "anime"
        },
        {
            id: 104,
            title: "【原创动画】星空下的约定",
            cover: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=600&h=340&fit=crop",
            videoUrl: "https://player.vimeo.com/external/459460152.sd.mp4?s=0d86d19a1918f8b0b443036d0f5b1d0e2e3d2e4b&profile_id=164&oauth2_token_id=57447761",
            duration: "05:48",
            views: "67.3万",
            likes: "4.8万",
            date: "2024-01-07",
            upName: "星空动画社",
            upAvatar: "https://i.pravatar.cc/100?img=14",
            upFollowers: "88万",
            description: "一部关于友情和约定的原创动画短片，在星空下许下的承诺能否实现？",
            category: "anime"
        }
    ],

    // 音乐区视频
    music: [
        {
            id: 201,
            title: "【翻唱】夜曲 钢琴版演奏",
            cover: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=600&h=340&fit=crop",
            videoUrl: "https://player.vimeo.com/external/494228379.sd.mp4?s=1a2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0&profile_id=164&oauth2_token_id=57447761",
            duration: "04:12",
            views: "234.5万",
            likes: "17.8万",
            date: "2024-01-13",
            upName: "钢琴王子",
            upAvatar: "https://i.pravatar.cc/100?img=21",
            upFollowers: "312万",
            description: "周杰伦《夜曲》的钢琴版演奏，希望能够带给大家不一样的听觉体验。喜欢的话请点赞支持！",
            category: "music"
        },
        {
            id: 202,
            title: "【原创】城市夜景配乐创作过程",
            cover: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=600&h=340&fit=crop",
            videoUrl: "https://player.vimeo.com/external/371842592.sd.mp4?s=a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0&profile_id=164&oauth2_token_id=57447761",
            duration: "09:36",
            views: "56.8万",
            likes: "4.1万",
            date: "2024-01-06",
            upName: "城市音乐人",
            upAvatar: "https://i.pravatar.cc/100?img=22",
            upFollowers: "78万",
            description: "记录创作一首城市夜景主题配乐的全过程，从灵感到完成，感受音乐创作的魅力。",
            category: "music"
        },
        {
            id: 203,
            title: "【吉他教学】新手入门第一课",
            cover: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=600&h=340&fit=crop",
            videoUrl: "https://player.vimeo.com/external/371842595.sd.mp4?s=b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1&profile_id=164&oauth2_token_id=57447761",
            duration: "11:24",
            views: "89.2万",
            likes: "6.7万",
            date: "2024-01-04",
            upName: "吉他教师老张",
            upAvatar: "https://i.pravatar.cc/100?img=23",
            upFollowers: "134万",
            description: "吉他教学系列第一课，从基础认识吉他开始，带你零基础入门学习吉他。",
            category: "music"
        },
        {
            id: 204,
            title: "【KTV】深夜食堂主题曲 翻唱",
            cover: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=600&h=340&fit=crop",
            videoUrl: "https://player.vimeo.com/external/371842598.sd.mp4?s=c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2&profile_id=164&oauth2_token_id=57447761",
            duration: "04:56",
            views: "112.4万",
            likes: "8.4万",
            date: "2024-01-02",
            upName: "深夜歌手",
            upAvatar: "https://i.pravatar.cc/100?img=24",
            upFollowers: "167万",
            description: "深夜食堂主题曲翻唱版本，希望这首歌能温暖你的心。深夜的温暖，从这里开始。",
            category: "music"
        }
    ]
};

// 评论数据
const commentsData = {
    1: [
        {
            user: "旅行爱好者",
            avatar: "https://i.pravatar.cc/100?img=31",
            content: "太美了！仿佛置身于仙境之中！",
            time: "2小时前",
            likes: 234
        },
        {
            user: "摄影师小王",
            avatar: "https://i.pravatar.cc/100?img=32",
            content: "画质和构图都非常出色，请问是使用什么设备拍摄的？",
            time: "5小时前",
            likes: 156
        },
        {
            user: "自然保护者",
            avatar: "https://i.pravatar.cc/100?img=33",
            content: "这样的美景让人更加珍惜我们的地球家园。感谢UP主的分享！",
            time: "1天前",
            likes: 89
        }
    ],
    6: [
        {
            user: "游戏迷阿强",
            avatar: "https://i.pravatar.cc/100?img=36",
            content: "终于等到新作了！塞尔达永远的神！",
            time: "30分钟前",
            likes: 567
        },
        {
            user: "任天堂粉丝",
            avatar: "https://i.pravatar.cc/100?img=37",
            content: "这个游戏的开放世界设计真的太棒了，每次玩都有新发现",
            time: "1小时前",
            likes: 423
        }
    ],
    201: [
        {
            user: "音乐发烧友",
            avatar: "https://i.pravatar.cc/100?img=41",
            content: "弹得太好听了！周杰伦听了都要点赞",
            time: "3小时前",
            likes: 890
        },
        {
            user: "钢琴初学者",
            avatar: "https://i.pravatar.cc/100?img=42",
            content: "UP主能分享一下谱子吗？想学这首曲子",
            time: "6小时前",
            likes: 234
        }
    ]
};

// 默认评论（当视频没有专属评论时）
const defaultComments = [
    {
        user: "热心网友",
        avatar: "https://i.pravatar.cc/100?img=50",
        content: "这个视频太棒了！收藏了！",
        time: "1小时前",
        likes: 123
    },
    {
        user: "普通用户",
        avatar: "https://i.pravatar.cc/100?img=51",
        content: "感谢UP主的分享，学到了很多东西",
        time: "3小时前",
        likes: 89
    },
    {
        user: "路人甲",
        avatar: "https://i.pravatar.cc/100?img=52",
        content: "制作精良，内容丰富，期待更多作品！",
        time: "5小时前",
        likes: 67
    }
];
