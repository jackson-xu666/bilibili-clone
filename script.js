// 渲染视频卡片
function renderVideoCard(video) {
    return `
        <div class="video-card" onclick="playVideo(${video.id})">
            <div class="video-cover">
                <img src="${video.cover}" alt="${video.title}">
                <span class="video-duration">${video.duration}</span>
                <div class="video-overlay">
                    <svg viewBox="0 0 24 24" width="32" height="32">
                        <path d="M8 5v14l11-7z"/>
                    </svg>
                </div>
            </div>
            <div class="video-info">
                <div class="video-title">${video.title}</div>
                <div class="video-up">
                    <img src="${video.upAvatar}" alt="UP主头像">
                    <span>${video.upName}</span>
                </div>
                <div class="video-meta">
                    <span>${video.views}播放</span>
                    <span>${video.date}</span>
                </div>
            </div>
        </div>
    `;
}

// 初始化视频网格
function initVideoGrids() {
    // 热门推荐
    const recommendedGrid = document.getElementById('videoGrid');
    recommendedGrid.innerHTML = videosData.recommended.map(renderVideoCard).join('');

    // 动画区
    const animeGrid = document.getElementById('animeGrid');
    animeGrid.innerHTML = videosData.anime.map(renderVideoCard).join('');

    // 音乐区
    const musicGrid = document.getElementById('musicGrid');
    musicGrid.innerHTML = videosData.music.map(renderVideoCard).join('');
}

// 查找视频
function findVideoById(id) {
    // 在推荐中查找
    const recommended = videosData.recommended.find(v => v.id === id);
    if (recommended) return recommended;

    // 在动画中查找
    const anime = videosData.anime.find(v => v.id === id);
    if (anime) return anime;

    // 在音乐中查找
    const music = videosData.music.find(v => v.id === id);
    if (music) return music;

    return null;
}

// 播放视频
function playVideo(videoId) {
    const video = findVideoById(videoId);
    if (!video) {
        alert('视频不存在');
        return;
    }

    // 更新播放器
    const player = document.getElementById('videoPlayer');
    player.src = video.videoUrl;
    player.play().catch(e => console.log('自动播放失败:', e));

    // 更新视频信息
    document.getElementById('videoTitle').textContent = video.title;
    document.getElementById('videoViews').textContent = video.views;
    document.getElementById('videoDate').textContent = video.date;
    document.getElementById('videoLikes').textContent = video.likes;

    // 更新UP主信息
    document.getElementById('upAvatar').src = video.upAvatar;
    document.getElementById('upName').textContent = video.upName;
    document.getElementById('upFollowers').textContent = video.upFollowers + ' 粉丝';

    // 更新视频简介
    document.getElementById('videoDescription').textContent = video.description;

    // 加载评论
    loadComments(videoId);

    // 显示模态框
    document.getElementById('playerModal').classList.add('active');

    // 禁用页面滚动
    document.body.style.overflow = 'hidden';
}

// 关闭播放器
function closePlayer() {
    const player = document.getElementById('videoPlayer');
    player.pause();
    player.src = '';

    document.getElementById('playerModal').classList.remove('active');
    document.body.style.overflow = '';
}

// 加载评论
function loadComments(videoId) {
    const commentsList = document.getElementById('commentsList');
    const comments = commentsData[videoId] || defaultComments;

    document.getElementById('commentCount').textContent = comments.length;

    commentsList.innerHTML = comments.map(comment => `
        <div class="comment-item">
            <div class="comment-avatar">
                <img src="${comment.avatar}" alt="用户头像">
            </div>
            <div class="comment-content">
                <div class="comment-user">${comment.user}</div>
                <div class="comment-text">${comment.content}</div>
                <div class="comment-time">${comment.time}</div>
                <div class="comment-actions">
                    <span class="comment-action">👍 ${comment.likes}</span>
                    <span class="comment-action">回复</span>
                </div>
            </div>
        </div>
    `).join('');
}

// 提交评论
function submitComment() {
    const commentText = document.getElementById('commentText').value.trim();
    if (!commentText) {
        alert('请输入评论内容');
        return;
    }

    const commentsList = document.getElementById('commentsList');
    const newComment = `
        <div class="comment-item">
            <div class="comment-avatar">
                <img src="https://i.pravatar.cc/100?img=33" alt="用户头像">
            </div>
            <div class="comment-content">
                <div class="comment-user">我</div>
                <div class="comment-text">${commentText}</div>
                <div class="comment-time">刚刚</div>
                <div class="comment-actions">
                    <span class="comment-action">👍 0</span>
                    <span class="comment-action">回复</span>
                </div>
            </div>
        </div>
    `;

    commentsList.insertAdjacentHTML('afterbegin', newComment);

    // 更新评论数
    const commentCount = document.getElementById('commentCount');
    commentCount.textContent = parseInt(commentCount.textContent) + 1;

    // 清空输入框
    document.getElementById('commentText').value = '';

    alert('评论发布成功！');
}

// 关注UP主
function followUp() {
    const followBtn = document.querySelector('.follow-btn');
    if (followBtn.textContent === '+ 关注') {
        followBtn.textContent = '已关注';
        followBtn.style.background = '#9499A0';
        alert('关注成功！');
    } else {
        followBtn.textContent = '+ 关注';
        followBtn.style.background = '#FB7299';
    }
}

// 搜索视频
function searchVideos() {
    const query = document.getElementById('searchInput').value.trim().toLowerCase();
    if (!query) {
        alert('请输入搜索关键词');
        return;
    }

    // 搜索所有视频
    const allVideos = [
        ...videosData.recommended,
        ...videosData.anime,
        ...videosData.music
    ];

    const results = allVideos.filter(video =>
        video.title.toLowerCase().includes(query) ||
        video.upName.toLowerCase().includes(query)
    );

    if (results.length === 0) {
        alert('未找到相关视频');
        return;
    }

    // 显示搜索结果
    const videoGrid = document.getElementById('videoGrid');
    videoGrid.innerHTML = results.map(renderVideoCard).join('');

    // 隐藏其他分区
    document.getElementById('animeGrid').parentElement.style.display = 'none';
    document.getElementById('musicGrid').parentElement.style.display = 'none';

    // 滚动到视频区域
    videoGrid.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// 分类筛选
document.querySelectorAll('.category-item').forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();

        // 移除所有active类
        document.querySelectorAll('.category-item').forEach(i => i.classList.remove('active'));

        // 添加active类到当前项
        item.classList.add('active');

        const category = item.dataset.category;

        // 显示所有分区
        document.querySelectorAll('.video-grid').forEach(grid => {
            grid.parentElement.style.display = 'block';
        });

        if (category === 'all') {
            initVideoGrids();
        } else {
            // 筛选对应分类的视频
            const allVideos = [
                ...videosData.recommended,
                ...videosData.anime,
                ...videosData.music
            ];

            const filtered = allVideos.filter(video => video.category === category);

            // 更新主视频网格
            const videoGrid = document.getElementById('videoGrid');
            videoGrid.innerHTML = filtered.map(renderVideoCard).join('');

            // 隐藏其他分区
            document.getElementById('animeGrid').parentElement.style.display = 'none';
            document.getElementById('musicGrid').parentElement.style.display = 'none';
        }
    });
});

// ESC键关闭播放器
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closePlayer();
    }
});

// 点击模态框外部关闭播放器
document.getElementById('playerModal').addEventListener('click', (e) => {
    if (e.target.id === 'playerModal') {
        closePlayer();
    }
});

// 回车键搜索
document.getElementById('searchInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        searchVideos();
    }
});

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    initVideoGrids();
    console.log('Bilibili Clone 初始化完成');
    console.log('可用的视频数量:', {
        推荐视频: videosData.recommended.length,
        动画视频: videosData.anime.length,
        音乐视频: videosData.music.length,
        总计: videosData.recommended.length + videosData.anime.length + videosData.music.length
    });
});
