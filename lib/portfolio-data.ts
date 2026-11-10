export const profile = {
  name: 'Phan Đức',
  shortName: 'phanduc',
  greeting: 'Xin chào, mình là',
  roles: ['Marketing Technology.', 'Branding & Content.', 'Creative Storyteller.'],
  location: 'Ho Chi Minh City, Vietnam',
  coordinates: '10.7769° N / 106.7009° E',
  email: 'contact@phanduc.tech',
  phone: '0900 000 000',
  phoneRaw: '0900000000',
  upwork: 'upwork.com/freelancers/phanduc',
  upworkUrl: 'https://www.upwork.com/',
  linkedin: 'linkedin.com/in/phanduc',
  linkedinUrl: 'https://www.linkedin.com/',
  intro: [
    'Xin chào ai đó! Mình rất hào hứng với việc tìm hiểu và kể chuyện cho các sản phẩm, thương hiệu — mình hy vọng sẽ trở thành chiếc cầu nối nhỏ, dùng ngôn ngữ hình ảnh và nội dung để giúp những ý tưởng, sản phẩm mà mình đồng hành tiếp cận đến mọi người một cách tự nhiên, thân thiện nhất.',
    'Đây là nơi mình gói ghém những dự án, một chút sáng tạo và rất nhiều tâm huyết. Mỗi dự án là một câu chuyện thú vị, một bài học, và mình rất vui khi được chia sẻ tại đây.',
  ],
  motto: 'Cùng cố gắng vì ngày mai rực rỡ hơn.',
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

export type ExperienceType = 'work' | 'freelance'

export type Experience = {
  type: ExperienceType
  role: string
  company: string
  period: string
  tasks: string[]
  results: string[]
}

export const experiences: Experience[] = [
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
]

export const photos = [
  { src: '/images/photo-1.png', alt: 'Đường phố Sài Gòn lúc chạng vạng với vệt đèn xe máy', caption: 'Sài Gòn, 18:42' },
  { src: '/images/photo-2.png', alt: 'Ruộng bậc thang Sapa trong sương sớm', caption: 'Sapa, 05:30' },
  { src: '/images/photo-3.png', alt: 'Ly cà phê phin trên bàn gỗ cạnh cửa sổ', caption: 'Cà phê sáng' },
  { src: '/images/photo-4.png', alt: 'Phố cổ Hội An về đêm với đèn lồng phản chiếu mặt sông', caption: 'Hội An, 21:10' },
]

export const certificates = [
  { title: 'Top 500 #AIRiserVietnam2026 Participants', issuer: 'Google for Developers', date: 'Tháng 10, 2026' },
  { title: 'IBM Product Manager', issuer: 'Coursera', date: 'Tháng 09, 2026' },
  { title: 'Google Project Management', issuer: 'Coursera · Google', date: 'Tháng 09, 2026' },
  { title: 'Google Data-Driven Decision Making', issuer: 'Coursera · Google', date: 'Tháng 09, 2026' },
]

export const navLinks = [
  { href: '#about', label: 'Giới thiệu' },
  { href: '#experience', label: 'Kinh nghiệm' },
  { href: '#gallery', label: 'Nhiếp ảnh' },
  { href: '#certificates', label: 'Chứng chỉ' },
  { href: '#contact', label: 'Liên hệ' },
]
