import {
  Search,
  Building2,
  GraduationCap,
  Lock,
  LayoutGrid,
  Globe,
  Monitor,
  BookOpen,
  Snowflake,
  CalendarDays,
  Languages,
  Users,
  UtensilsCrossed,
  type LucideIcon
} from 'lucide-react';

// Utility Navigation Items
export const utilityNavItems: Array<{ label: string; icon: LucideIcon }> = [
  { label: 'FIND IT FAST', icon: Search },
  { label: 'STAFF', icon: Building2 },
  { label: 'STUDENTS', icon: GraduationCap },
  { label: 'FAMILIES', icon: Lock },
  { label: 'SCHOOLS', icon: LayoutGrid },
  { label: 'TRANSLATE', icon: Globe },
];

// Quick Links
export const quickLinks: Array<{ label: string; icon: LucideIcon; href: string }> = [
  { label: 'Careers', icon: Monitor, href: '/careers' },
  { label: 'Academics', icon: BookOpen, href: '/academics' },
  { label: 'Weather Info', icon: Snowflake, href: '/weather' },
  { label: 'Calendar', icon: CalendarDays, href: '/calendar' },
  { label: 'Language Support', icon: Languages, href: '/language-support' },
  { label: 'ParentVue', icon: Users, href: '/parentvue' },
  { label: 'Menus', icon: UtensilsCrossed, href: '/menus' },
  { label: 'Facility Master Plan', icon: Building2, href: '/facility-master-plan' },
];

// News Items
export const newsItems: Array<{
  id: number;
  title: string;
  excerpt: string;
  date: string;
  imageGradient: string;
}> = [
  {
    id: 1,
    title: 'WPS Schools Receive National Recognition',
    excerpt: 'Three Wichita Public Schools have been honored with the National Blue Ribbon School Award for their outstanding academic achievement and progress in closing achievement gaps.',
    date: '2026-03-15',
    imageGradient: 'from-blue-600 to-purple-600',
  },
  {
    id: 2,
    title: 'Distinguished Classroom Teachers Announced',
    excerpt: 'USD 259 celebrates this year\'s Distinguished Classroom Teachers who have demonstrated exceptional dedication to student success and innovative teaching practices.',
    date: '2026-03-10',
    imageGradient: 'from-teal-600 to-cyan-600',
  },
  {
    id: 3,
    title: 'Board of Education Updates 26-27 Calendar',
    excerpt: 'The USD 259 Board of Education has approved the 2026-2027 academic calendar, including important dates for students, families, and staff.',
    date: '2026-03-08',
    imageGradient: 'from-indigo-600 to-blue-600',
  },
  {
    id: 4,
    title: 'Spring Sports Season Kicks Off',
    excerpt: 'WPS spring athletics are underway with soccer, track and field, tennis, and baseball teams competing across the city. Check schedules and show your school spirit!',
    date: '2026-03-05',
    imageGradient: 'from-green-600 to-emerald-600',
  },
  {
    id: 5,
    title: 'New STEM Lab Opens at North High',
    excerpt: 'North High School unveils a state-of-the-art STEM laboratory featuring robotics equipment, 3D printers, and collaborative learning spaces for students.',
    date: '2026-03-01',
    imageGradient: 'from-orange-600 to-red-600',
  },
  {
    id: 6,
    title: 'WPS Celebrates Teacher Appreciation Week',
    excerpt: 'This week, USD 259 honors the dedication and hard work of our 3,000+ teachers who inspire and educate students across the district every day.',
    date: '2026-02-28',
    imageGradient: 'from-pink-600 to-rose-600',
  },
  {
    id: 7,
    title: 'Summer School Registration Now Open',
    excerpt: 'Registration is now open for summer school programs offering enrichment, credit recovery, and acceleration opportunities for students in grades K-12.',
    date: '2026-02-25',
    imageGradient: 'from-yellow-600 to-orange-600',
  },
  {
    id: 8,
    title: 'Class of 2026 Graduation Dates Announced',
    excerpt: 'Mark your calendars! Graduation ceremonies for the Class of 2026 will be held at INTRUST Bank Arena. View the complete schedule of ceremonies.',
    date: '2026-02-20',
    imageGradient: 'from-purple-600 to-pink-600',
  },
];

// School of Choice Items
export const schoolOfChoiceItems: Array<{ label: string; color: string }> = [
  { label: 'CTE Programs', color: '#2563EB' },
  { label: 'Fine Arts', color: '#7C3AED' },
  { label: 'Athletics', color: '#059669' },
  { label: 'Choice Programs', color: '#D97706' },
  { label: 'Special Needs', color: '#DC2626' },
  { label: 'JROTC', color: '#1F2937' },
];

// Footer Links
export const footerLinks = {
  government: {
    title: 'Government',
    links: [
      { label: 'Board of Education', href: '/board' },
      { label: 'Superintendent', href: '/superintendent' },
      { label: 'District Leadership', href: '/leadership' },
      { label: 'Policies & Procedures', href: '/policies' },
      { label: 'Budget & Finance', href: '/budget' },
    ],
  },
  services: {
    title: 'Services',
    links: [
      { label: 'Transportation', href: '/transportation' },
      { label: 'Food Services', href: '/food-services' },
      { label: 'Student Services', href: '/student-services' },
      { label: 'Special Education', href: '/special-education' },
      { label: 'Technology Support', href: '/tech-support' },
    ],
  },
  about: {
    title: 'About',
    links: [
      { label: 'District Information', href: '/about' },
      { label: 'Contact Us', href: '/contact' },
      { label: 'Employment', href: '/employment' },
      { label: 'Community Resources', href: '/community' },
      { label: 'News & Updates', href: '/news' },
    ],
  },
};
