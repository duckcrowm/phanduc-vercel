export type Lang = 'vi' | 'en'

export const profile = {
  shortName: 'phanduc',
  coordinates: '10.7769° N / 106.7009° E',
  email: 'contact@phanduc.tech',
  phone: '0900 000 000',
  phoneRaw: '0900000000',
  upwork: 'upwork.com/freelancers/phanduc',
  upworkUrl: 'https://www.upwork.com/',
  linkedin: 'linkedin.com/in/phanduc',
  linkedinUrl: 'https://www.linkedin.com/',
}

export const tools = [
  { name: 'Illustrator', level: 100 },
  { name: 'Photoshop', level: 80 },
  { name: 'InDesign', level: 80 },
  { name: 'CapCut', level: 100 },
  { name: 'PowerPoint', level: 100 },
  { name: 'Canva', level: 100 },
  { name: 'Figma', level: 70 },
  { name: 'Framer', level: 60 },
  { name: 'WordPress', level: 70 },
]

export type ProjectType = 'work' | 'freelance'

export type Project = {
  type: ProjectType
  role: string
  company: string
  period: string
  tasks: string[]
  results: string[]
}

const vi = {
  nav: {
    home: 'Trang chủ',
    skills: 'Kỹ năng',
    projects: 'Dự án',
    experience: 'Kinh nghiệm',
    contact: 'Liên hệ',
  },
  ui: {
    mainNav: 'Điều hướng chính',
    mobileNav: 'Điều hướng di động',
    toggleTheme: 'Chuyển chế độ sáng/tối',
    language: 'Ngôn ngữ',
    openMenu: 'Mở menu',
    closeMenu: 'Đóng menu',
  },
  hero: {
    greeting: 'Xin chào, mình là',
    name: 'Phan Đức',
    headline: 'Marketing',
    roles: ['Content Executive', 'Marketing Technology'],
    hello: 'Xin chào ai đó!',
    introBefore:
      'Đối với mình, mỗi thương hiệu và sản phẩm đều mang trong mình một câu chuyện và linh hồn riêng - mình rất hào hứng trong việc kể những câu chuyện ý nghĩa đó đến với mọi người. Mình hy vọng bằng cách sử dụng ngôn ngữ hình ảnh và nội dung sẽ là ',
    highlight: 'chiếc cầu nối nhỏ',
    introAfter: ' đưa những giá trị cảm xúc của thương hiệu đến với công chúng.',
    intro2:
      'Góc nhỏ này là nơi mình đồng hành cùng các dự án, nơi cất giữ những kỷ niệm sáng tạo và nhiệt huyết. Mỗi dự án là một câu chuyện thú vị, một bài học, và mình rất vui khi được chia sẻ tại đây.',
    motto: 'Cùng bước tiếp để thấy ánh sáng rực rỡ.',
    ctaPrimary: 'Kết nối ngay',
    ctaSecondary: 'Xem dự án',
    caption: 'Một khung cảnh có rất nhiều câu chuyện mà mình thích',
    imageAlt: 'Cây Erdtree phát sáng vàng rực giữa những tàn tích cổ, một hiệp sĩ cưỡi ngựa đứng ở góc dưới',
  },
  skills: {
    title: 'Kỹ năng',
    code: 'skills',
    toolsTitle: 'Công cụ',
    toolLevel: (name: string) => `Mức thành thạo ${name}`,
    groupsTitle: 'Chuyên môn',
    groups: [
      {
        title: 'Marketing & Brand',
        items: ['Content Strategy', 'Brand Management', 'Social Media', 'SEO', 'Facebook Ads', 'Google Ads', 'Event Planning'],
      },
      {
        title: 'Sáng tạo',
        items: ['Copywriting', 'Storytelling', 'Thiết kế đồ họa', 'Dựng video', 'Presentation Design'],
      },
      {
        title: 'Công nghệ',
        items: ['Quản trị Website', 'Landing Page', 'Phân tích dữ liệu', 'Data Entry', 'Workflow & Automation'],
      },
    ],
  },
  projects: {
    title: 'Dự án',
    code: 'projects.log',
    filterAria: 'Lọc dự án',
    all: 'Tất cả',
    result: 'Kết quả',
    groups: {
      work: { title: 'Dự án tại công ty', code: 'in_house_and_corporate_projects', unit: 'công ty' },
      freelance: {
        title: 'Dự án ngắn hạn / Freelancer',
        code: 'freelance_and_short_term_collaborations',
        unit: 'dự án / nền tảng',
      },
    },
    items: [
      {
        type: 'work',
        role: 'Marketing Executive (kiêm Team Lead)',
        company: 'Công ty Công nghệ ABC',
        period: '07/2026 - Nay',
        tasks: [
          'Phụ trách triển khai kế hoạch nội dung tổng thể hàng tháng trên 3 kênh (Facebook, LinkedIn, Zalo Community)',
          'Quản lý Website công ty và đề xuất chiến lược hợp nhất thương hiệu cho hệ thống social media',
          'Phối hợp cùng Tech Lead sản xuất marketing material phục vụ đội sales và đối tác',
          'Lập kế hoạch và triển khai sự kiện offline/online, thiết kế trọn bộ ấn phẩm POSM',
        ],
        results: [
          'Tổ chức thành công Workshop (20+ khách) và Webinar (30+ khách)',
          'Website +13% phiên truy cập; LinkedIn +68.9% clicks; Facebook +162.5% tương tác',
        ],
      },
      {
        type: 'work',
        role: 'Brand & Content Executive',
        company: 'Công ty Du lịch XYZ',
        period: '12/2025 - 07/2026',
        tasks: [
          'Xây dựng Website từ đầu, hệ thống Admin quản trị Tours, Blogs; tối ưu Responsive & SEO',
          'Lập kế hoạch chiến lược Marketing 1 năm, phân bổ ngân sách, quản trị tài sản thương hiệu',
          'Quay và dựng video, thiết kế Social Post',
          'Chạy Facebook Ads và Google Ads',
        ],
        results: [
          'Đạt 800K+ lượt xem, 390K+ lượt tương tác sau 1 tháng chạy Ads',
          'CTR Google Ads đạt 2.93%, 35K+ lượt hiển thị, 3K+ lượt truy cập',
        ],
      },
      {
        type: 'freelance',
        role: 'Content & Media Marketing',
        company: 'Thương hiệu Trang sức',
        period: '03/2025 - 05/2025',
        tasks: ['Lên lịch và nội dung cho Post', 'Hỗ trợ thiết kế cùng Designer', 'Quay chụp sản phẩm tại cửa hàng'],
        results: ['Tăng 15.4% lượt tiếp cận, 46.2% lượt tương tác Facebook trong 2 tháng'],
      },
      {
        type: 'freelance',
        role: 'Content Creator, Social Media',
        company: 'Kênh YouTube Giáo dục',
        period: '09/2024 - 05/2025',
        tasks: ['Quay và edit video theo chủ đề', 'Quản lý kênh YouTube: bình luận, bản quyền, video'],
        results: ['Tăng 500 subscribers & 200% tổng lượt view của kênh'],
      },
      {
        type: 'freelance',
        role: 'Content Marketing, Designer',
        company: 'Trung tâm Âm nhạc',
        period: '06/2024 - 09/2024',
        tasks: ['Thiết kế Social Post, Banner, Standee, giáo trình', 'Edit video Reels, TikTok, YouTube'],
        results: ['Tăng 30% follow Fanpage', 'Tăng 20%+ khách hàng chốt đơn'],
      },
      {
        type: 'freelance',
        role: 'Freelancer',
        company: 'Upwork',
        period: '2023 - Nay',
        tasks: ['Social Media Marketing, Presentation Design, Data Entry'],
        results: ['Hoàn thành 20+ jobs, 100% Job Success', 'Đạt Top Rated'],
      },
    ] as Project[],
  },
  experience: {
    title: 'Kinh nghiệm',
    code: 'experience',
    location: 'Ho Chi Minh City, Vietnam',
    about: [
      'Mình là Marketer với 3+ năm kinh nghiệm trong mảng Branding và quản trị nội dung đa nền tảng. Mình thích tìm tòi về giao diện và cách vận hành của các nền tảng số để tìm ra cách truyền tải nội dung tự nhiên, gần gũi nhất đến người dùng.',
      'Mình đang tìm kiếm cơ hội tại các công ty công nghệ, mong muốn dùng tư duy sáng tạo để xóa bỏ rào cản giữa đội ngũ kỹ thuật và khách hàng.',
    ],
    stats: [
      { value: '3+', label: 'Năm kinh nghiệm' },
      { value: '20+', label: 'Dự án hoàn thành' },
      { value: 'BA', label: 'ngành Marketing' },
    ],
    education: 'Trường Đại học Công nghiệp TPHCM (IUH)',
    certsTitle: 'Chứng chỉ',
    certificates: [
      { title: 'Top 500 #AIRiserVietnam2026 Participants', issuer: 'Google for Developers', date: 'Tháng 10, 2026' },
      { title: 'IBM Product Manager', issuer: 'Coursera', date: 'Tháng 09, 2026' },
      { title: 'Google Project Management', issuer: 'Coursera · Google', date: 'Tháng 09, 2026' },
      { title: 'Google Data-Driven Decision Making', issuer: 'Coursera · Google', date: 'Tháng 09, 2026' },
    ],
  },
  contact: {
    title: 'Kết Nối Ngay',
    text: 'Mình luôn sẵn sàng cho những cơ hội đồng hành và những dự án đầy tiềm năng phía trước. Hãy để lại lời nhắn hoặc kết nối với mình qua các kênh bên dưới nhé.',
    email: 'Email',
    phone: 'Điện thoại',
  },
  footer: {
    serverTime: 'GIỜ MÁY CHỦ',
    coordinates: 'TỌA ĐỘ',
  },
}

export type Content = typeof vi

const en: Content = {
  nav: {
    home: 'Home',
    skills: 'Skills',
    projects: 'Projects',
    experience: 'Experience',
    contact: 'Contact',
  },
  ui: {
    mainNav: 'Main navigation',
    mobileNav: 'Mobile navigation',
    toggleTheme: 'Toggle light/dark mode',
    language: 'Language',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
  },
  hero: {
    greeting: 'Hi, I am',
    name: 'Phan Đức',
    headline: 'Marketing',
    roles: ['Content Executive', 'Marketing Technology'],
    hello: 'Hello, stranger!',
    introBefore:
      'To me, every brand and product carries its own story and soul - and I am thrilled to tell those meaningful stories to everyone. I hope that by using visual language and content, I can be a ',
    highlight: 'small bridge',
    introAfter: ' that brings the emotional value of a brand to the public.',
    intro2:
      'This little corner is where I walk alongside my projects and keep my creative memories and passion. Every project is an interesting story and a lesson, and I am happy to share them here.',
    motto: 'Let us keep moving forward to see the radiant light.',
    ctaPrimary: 'Get in touch',
    ctaSecondary: 'View projects',
    caption: 'A scene full of stories that I love',
    imageAlt: 'A glowing golden Erdtree above ancient ruins, with a knight on horseback in the lower corner',
  },
  skills: {
    title: 'Skills',
    code: 'skills',
    toolsTitle: 'Tools',
    toolLevel: (name: string) => `Proficiency in ${name}`,
    groupsTitle: 'Expertise',
    groups: [
      {
        title: 'Marketing & Brand',
        items: ['Content Strategy', 'Brand Management', 'Social Media', 'SEO', 'Facebook Ads', 'Google Ads', 'Event Planning'],
      },
      {
        title: 'Creative',
        items: ['Copywriting', 'Storytelling', 'Graphic Design', 'Video Editing', 'Presentation Design'],
      },
      {
        title: 'Technology',
        items: ['Website Management', 'Landing Pages', 'Data Analysis', 'Data Entry', 'Workflow & Automation'],
      },
    ],
  },
  projects: {
    title: 'Projects',
    code: 'projects.log',
    filterAria: 'Filter projects',
    all: 'All',
    result: 'Results',
    groups: {
      work: { title: 'In-house projects', code: 'in_house_and_corporate_projects', unit: 'companies' },
      freelance: {
        title: 'Short-term / Freelance',
        code: 'freelance_and_short_term_collaborations',
        unit: 'projects / platforms',
      },
    },
    items: [
      {
        type: 'work',
        role: 'Marketing Executive (Team Lead)',
        company: 'ABC Technology Company',
        period: '07/2026 - Present',
        tasks: [
          'Led the monthly master content plan across 3 channels (Facebook, LinkedIn, Zalo Community)',
          'Managed the company website and proposed a unified brand strategy for the social media system',
          'Worked with the Tech Lead to produce marketing materials for the sales team and partners',
          'Planned and ran offline/online events and designed the full set of POSM materials',
        ],
        results: [
          'Successfully organized a Workshop (20+ guests) and a Webinar (30+ guests)',
          'Website +13% sessions; LinkedIn +68.9% clicks; Facebook +162.5% engagement',
        ],
      },
      {
        type: 'work',
        role: 'Brand & Content Executive',
        company: 'XYZ Travel Company',
        period: '12/2025 - 07/2026',
        tasks: [
          'Built the website from scratch with an admin system for Tours and Blogs; optimized Responsive & SEO',
          'Planned a 1-year marketing strategy, allocated budget and managed brand assets',
          'Shot and edited videos, designed social posts',
          'Ran Facebook Ads and Google Ads',
        ],
        results: [
          'Reached 800K+ views and 390K+ interactions after 1 month of ads',
          'Google Ads CTR of 2.93%, 35K+ impressions, 3K+ visits',
        ],
      },
      {
        type: 'freelance',
        role: 'Content & Media Marketing',
        company: 'Jewelry Brand',
        period: '03/2025 - 05/2025',
        tasks: ['Scheduled posts and wrote content', 'Supported the Designer with visuals', 'Shot products in store'],
        results: ['Grew Facebook reach by 15.4% and engagement by 46.2% in 2 months'],
      },
      {
        type: 'freelance',
        role: 'Content Creator, Social Media',
        company: 'Educational YouTube Channel',
        period: '09/2024 - 05/2025',
        tasks: ['Shot and edited topic-based videos', 'Managed the YouTube channel: comments, copyright, videos'],
        results: ['Gained 500 subscribers and grew total channel views by 200%'],
      },
      {
        type: 'freelance',
        role: 'Content Marketing, Designer',
        company: 'Music Center',
        period: '06/2024 - 09/2024',
        tasks: ['Designed social posts, banners, standees and course materials', 'Edited Reels, TikTok and YouTube videos'],
        results: ['Grew Fanpage followers by 30%', 'Increased closed customers by 20%+'],
      },
      {
        type: 'freelance',
        role: 'Freelancer',
        company: 'Upwork',
        period: '2023 - Present',
        tasks: ['Social Media Marketing, Presentation Design, Data Entry'],
        results: ['Completed 20+ jobs with 100% Job Success', 'Achieved Top Rated'],
      },
    ],
  },
  experience: {
    title: 'Experience',
    code: 'experience',
    location: 'Ho Chi Minh City, Vietnam',
    about: [
      'I am a Marketer with 3+ years of experience in Branding and multi-platform content management. I love exploring the interfaces and inner workings of digital platforms to find the most natural and approachable way to deliver content to users.',
      'I am looking for opportunities at technology companies, hoping to use creative thinking to break down the barrier between engineering teams and customers.',
    ],
    stats: [
      { value: '3+', label: 'Years of experience' },
      { value: '20+', label: 'Projects completed' },
      { value: 'BA', label: 'in Marketing' },
    ],
    education: 'Ho Chi Minh City University of Industry (IUH)',
    certsTitle: 'Certificates',
    certificates: [
      { title: 'Top 500 #AIRiserVietnam2026 Participants', issuer: 'Google for Developers', date: 'Oct 2026' },
      { title: 'IBM Product Manager', issuer: 'Coursera', date: 'Sep 2026' },
      { title: 'Google Project Management', issuer: 'Coursera · Google', date: 'Sep 2026' },
      { title: 'Google Data-Driven Decision Making', issuer: 'Coursera · Google', date: 'Sep 2026' },
    ],
  },
  contact: {
    title: 'Get In Touch',
    text: 'I am always open to new collaborations and promising projects ahead. Leave a message or reach out through any of the channels below.',
    email: 'Email',
    phone: 'Phone',
  },
  footer: {
    serverTime: 'SERVER TIME',
    coordinates: 'COORDINATES',
  },
}

export const content: Record<Lang, Content> = { vi, en }
