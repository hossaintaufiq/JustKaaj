"use client";
import { useState, useEffect } from "react";
import Navbar from "@/Component/Shared/Navbar";
import Footer from "@/Component/Shared/Footer";
import { FaUsers, FaUserCheck, FaUserTimes, FaBuilding, FaCheckCircle, FaHourglassHalf, FaSearch, FaHistory } from "react-icons/fa";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// Mock data
const mockUsers = [
  { id: 1, name: "John Doe", email: "john.doe@example.com", status: "active" },
  { id: 2, name: "Jane Smith", email: "jane.smith@example.com", status: "banned" },
  { id: 3, name: "Alice Brown", email: "alice.brown@example.com", status: "active" },
  { id: 4, name: "Bob White", email: "bob.white@example.com", status: "active" },
  { id: 5, name: "Charlie Black", email: "charlie.black@example.com", status: "banned" },
];

const mockProviders = [
  {
    id: 1,
    name: "CleanPro Services",
    owner: "Jane Smith",
    email: "contact@cleanpro.com",
    status: "active",
    profileCompletion: 100,
    reviewRequested: true,
    verified: true,
    nid_number: "1234567890",
    business_license: "BL-2023-001",
    govt_id_or_tin: "TIN-987654321",
    facebook_profile: "https://facebook.com/cleanpro",
    website_link: "https://cleanpro.com",
    area_name: "Downtown",
    postal_code: "54321",
    phone_number: "+1 (555) 987-6543",
    category: "Cleaning",
  },
  {
    id: 2,
    name: "OfficeClean Solutions",
    owner: "Bob Brown",
    email: "office@clean.com",
    status: "active",
    profileCompletion: 92,
    reviewRequested: false,
    verified: false,
    nid_number: "2345678901",
    business_license: "BL-2023-002",
    govt_id_or_tin: "TIN-123456789",
    facebook_profile: "https://facebook.com/officeclean",
    website_link: "https://officeclean.com",
    area_name: "Midtown",
    postal_code: "12345",
    phone_number: "+1 (555) 123-4567",
    category: "Office Cleaning",
  },
  {
    id: 3,
    name: "Event Masters",
    owner: "Alice Green",
    email: "event@masters.com",
    status: "banned",
    profileCompletion: 85,
    reviewRequested: false,
    verified: false,
    nid_number: "3456789012",
    business_license: "BL-2023-003",
    govt_id_or_tin: "TIN-234567890",
    facebook_profile: "https://facebook.com/eventmasters",
    website_link: "https://eventmasters.com",
    area_name: "Uptown",
    postal_code: "67890",
    phone_number: "+1 (555) 234-5678",
    category: "Event Services",
  },
  {
    id: 4,
    name: "Sparkle Pros",
    owner: "David Lee",
    email: "sparkle@pros.com",
    status: "active",
    profileCompletion: 95,
    reviewRequested: true,
    verified: false,
    nid_number: "4567890123",
    business_license: "BL-2023-004",
    govt_id_or_tin: "TIN-345678901",
    facebook_profile: "https://facebook.com/sparklepros",
    website_link: "https://sparklepros.com",
    area_name: "Suburb",
    postal_code: "98765",
    phone_number: "+1 (555) 345-6789",
    category: "Specialty Cleaning",
  },
];

const mockActivity = [
  { id: 1, type: "ban", who: "Jane Smith", role: "Provider", date: "2024-06-30" },
  { id: 2, type: "verify", who: "David Lee", role: "Provider", date: "2024-06-29" },
  { id: 3, type: "ban", who: "Charlie Black", role: "User", date: "2024-06-28" },
  { id: 4, type: "review", who: "Sparkle Pros", role: "Provider", date: "2024-06-28" },
  { id: 5, type: "verify", who: "CleanPro Services", role: "Provider", date: "2024-06-27" },
];

const mockOrders = [
  { id: 1, user: "John Doe", provider: "CleanPro Services", service: "Home Cleaning", status: "completed", date: "2024-06-28", price: 1500 },
  { id: 2, user: "Alice Brown", provider: "OfficeClean Solutions", service: "Office Cleaning", status: "pending", date: "2024-06-29", price: 3000 },
  { id: 3, user: "Bob White", provider: "Event Masters", service: "Event Services", status: "ongoing", date: "2024-06-30", price: 5000 },
];

const mockCategories = [
  { id: 1, name: "Cleaning" },
  { id: 2, name: "Office Cleaning" },
  { id: 3, name: "Event Services" },
  { id: 4, name: "Specialty Cleaning" },
];

const mockReviews = [
  { id: 1, user: "John Doe", provider: "CleanPro Services", rating: 5, comment: "Great service!", status: "approved" },
  { id: 2, user: "Alice Brown", provider: "OfficeClean Solutions", rating: 4, comment: "Good job.", status: "pending" },
  { id: 3, user: "Bob White", provider: "Event Masters", rating: 2, comment: "Not satisfied.", status: "flagged" },
];

// Add mock data for provider applications
const mockProviderApplications = [
  {
    id: 101,
    name: "Sadia Rahman",
    email: "sadia.rahman@email.com",
    appliedAt: "2024-07-01 10:30",
    phone: "+880 1712-555888",
    business: "Sadia's Cleaning",
    nid: "9876543210",
    license: "BL-2024-010",
    area: "Banani, Dhaka",
    category: "Cleaning",
    website: "https://sadiaclean.com",
    facebook: "https://facebook.com/sadiaclean",
    documents: ["NID.pdf", "License.pdf"],
    status: "pending"
  },
  {
    id: 102,
    name: "Imran Hossain",
    email: "imran.hossain@email.com",
    appliedAt: "2024-07-01 09:15",
    phone: "+880 1812-333222",
    business: "Imran Plumbing",
    nid: "8765432109",
    license: "BL-2024-011",
    area: "Gulshan, Dhaka",
    category: "Plumbing",
    website: "https://imranplumb.com",
    facebook: "https://facebook.com/imranplumb",
    documents: ["NID.pdf", "License.pdf"],
    status: "pending"
  }
];

// Add ProviderApplication interface
interface ProviderApplication {
  id: number;
  name: string;
  email: string;
  appliedAt: string;
  phone: string;
  business: string;
  nid: string;
  license: string;
  area: string;
  category: string;
  website: string;
  facebook: string;
  documents: string[];
  status: string;
}

export default function AdminDashboard() {
  const [tab, setTab] = useState("users");
  const [users, setUsers] = useState<typeof mockUsers>([]);
  const [providers, setProviders] = useState<typeof mockProviders>([]);
  const [userSearch, setUserSearch] = useState("");
  const [providerSearch, setProviderSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [orderSearch, setOrderSearch] = useState("");
  const [categorySearch, setCategorySearch] = useState("");
  const [reviewSearch, setReviewSearch] = useState("");
  const [orders] = useState(mockOrders);
  const [categories] = useState(mockCategories);
  const [reviews] = useState(mockReviews);
  const [newCategory, setNewCategory] = useState("");
  const [editingCategoryId, setEditingCategoryId] = useState<number | null>(null);
  const [editingCategoryName, setEditingCategoryName] = useState("");
  const [providerApplications, setProviderApplications] = useState<ProviderApplication[]>(mockProviderApplications);
  const [selectedApplication, setSelectedApplication] = useState<ProviderApplication | null>(null);
  const [showApplicationModal, setShowApplicationModal] = useState(false);
  const [applicationComment, setApplicationComment] = useState("");

  // Simulate data fetching
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setUsers(mockUsers);
      setProviders(mockProviders);
      setLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  // Stats
  const totalUsers = users.length;
  const activeUsers = users.filter(u => u.status === "active").length;
  const bannedUsers = users.filter(u => u.status === "banned").length;
  const totalProviders = providers.length;
  const verifiedProviders = providers.filter(p => p.verified).length;
  const pendingReviews = providers.filter(p => p.reviewRequested && !p.verified).length;

  // Ban/unban logic
  const toggleUserStatus = (id: number) => {
    setUsers(users.map(u => u.id === id ? { ...u, status: u.status === "active" ? "banned" : "active" } : u));
  };
  const toggleProviderStatus = (id: number) => {
    setProviders(providers.map(p => p.id === id ? { ...p, status: p.status === "active" ? "banned" : "active" } : p));
  };

  // Review/verify logic
  const handleVerify = (id: number) => {
    setProviders(providers.map(p => p.id === id ? { ...p, verified: true, reviewRequested: false } : p));
  };
  const handleReject = (id: number) => {
    setProviders(providers.map(p => p.id === id ? { ...p, verified: false, reviewRequested: false } : p));
  };

  // Filtered lists
  const filteredUsers = users.filter(u =>
    u.name.toLowerCase().includes(userSearch.toLowerCase()) ||
    u.email.toLowerCase().includes(userSearch.toLowerCase())
  );
  const filteredProviders = providers.filter(p =>
    p.name.toLowerCase().includes(providerSearch.toLowerCase()) ||
    p.owner.toLowerCase().includes(providerSearch.toLowerCase()) ||
    p.email.toLowerCase().includes(providerSearch.toLowerCase())
  );

  // Mock chart data
  const [userChartTab, setUserChartTab] = useState<'daily' | 'monthly' | 'yearly'>('daily');
  const [providerChartTab, setProviderChartTab] = useState<'daily' | 'monthly' | 'yearly'>('daily');

  const userChartData = {
    daily: {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      data: [5, 8, 6, 10, 7, 12, 9],
    },
    monthly: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      data: [120, 140, 130, 150, 170, 160, 180, 200, 210, 220, 230, 250],
    },
    yearly: {
      labels: ["2020", "2021", "2022", "2023", "2024"],
      data: [800, 1200, 1800, 2500, 3200],
    },
  };
  const providerChartData = {
    daily: {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      data: [1, 2, 1, 3, 2, 4, 2],
    },
    monthly: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      data: [10, 12, 15, 18, 20, 22, 25, 28, 30, 32, 35, 40],
    },
    yearly: {
      labels: ["2020", "2021", "2022", "2023", "2024"],
      data: [30, 50, 80, 120, 180],
    },
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: { display: false },
    },
    scales: {
      x: { ticks: { color: '#111827' } },
      y: { ticks: { color: '#111827' } },
    },
  };

  // Add sidebar/tabs for all admin sections
  const adminTabs = [
    { id: "users", label: "Users" },
    { id: "providers", label: "Providers" },
    { id: "providerApps", label: "Provider Applications" },
    { id: "orders", label: "Orders" },
    { id: "categories", label: "Categories" },
    { id: "reviews", label: "Reviews" },
    { id: "analytics", label: "Analytics" },
    { id: "settings", label: "Settings" },
  ];

  // Add category handler
  const handleAddCategory = () => {
    if (newCategory.trim()) {
      const nextId = categories.length ? Math.max(...categories.map(c => c.id)) + 1 : 1;
      categories.push({ id: nextId, name: newCategory });
      setNewCategory("");
    }
  };
  // Edit category handler
  const handleEditCategory = (id: number) => {
    setEditingCategoryId(id);
    const cat = categories.find(c => c.id === id);
    setEditingCategoryName(cat ? cat.name : "");
  };
  const handleSaveEditCategory = (id: number) => {
    const idx = categories.findIndex(c => c.id === id);
    if (idx !== -1 && editingCategoryName.trim()) {
      categories[idx].name = editingCategoryName;
      setEditingCategoryId(null);
      setEditingCategoryName("");
    }
  };
  const handleDeleteCategory = (id: number) => {
    const idx = categories.findIndex(c => c.id === id);
    if (idx !== -1) {
      categories.splice(idx, 1);
      setEditingCategoryId(null);
      setEditingCategoryName("");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h1 className="text-2xl font-bold mb-6 text-gray-900">Admin Dashboard</h1>

          {/* Stats Summary */}
          {loading ? (
            <div className="flex justify-center items-center h-32">
              <span className="loader border-4 border-green-500 border-t-transparent rounded-full w-10 h-10 animate-spin"></span>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 sm:gap-6 mb-8 sm:mb-10">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 sm:p-6 flex items-center gap-3 sm:gap-4 transition-transform hover:shadow-lg hover:scale-[1.03] min-w-[140px]">
                <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-green-100 flex-shrink-0">
                  <FaUsers className="text-xl sm:text-2xl text-green-500" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-xl sm:text-2xl font-extrabold text-gray-900">{totalUsers}</div>
                  <div className="text-xs sm:text-sm font-medium text-gray-700 mt-1">Total Users</div>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 sm:p-6 flex items-center gap-3 sm:gap-4 transition-transform hover:shadow-lg hover:scale-[1.03] min-w-[140px]">
                <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-blue-100 flex-shrink-0">
                  <FaUserCheck className="text-xl sm:text-2xl text-blue-500" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-xl sm:text-2xl font-extrabold text-gray-900">{activeUsers}</div>
                  <div className="text-xs sm:text-sm font-medium text-gray-700 mt-1">Active Users</div>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 sm:p-6 flex items-center gap-3 sm:gap-4 transition-transform hover:shadow-lg hover:scale-[1.03] min-w-[140px]">
                <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-red-100 flex-shrink-0">
                  <FaUserTimes className="text-xl sm:text-2xl text-red-500" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-xl sm:text-2xl font-extrabold text-gray-900">{bannedUsers}</div>
                  <div className="text-xs sm:text-sm font-medium text-gray-700 mt-1">Banned Users</div>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 sm:p-6 flex items-center gap-3 sm:gap-4 transition-transform hover:shadow-lg hover:scale-[1.03] min-w-[140px]">
                <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-green-600 flex-shrink-0">
                  <FaBuilding className="text-xl sm:text-2xl text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-xl sm:text-2xl font-extrabold text-gray-900">{totalProviders}</div>
                  <div className="text-xs sm:text-sm font-medium text-gray-700 mt-1">Total Providers</div>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 sm:p-6 flex items-center gap-3 sm:gap-4 transition-transform hover:shadow-lg hover:scale-[1.03] min-w-[140px]">
                <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-green-400 flex-shrink-0">
                  <FaCheckCircle className="text-xl sm:text-2xl text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-xl sm:text-2xl font-extrabold text-gray-900">{verifiedProviders}</div>
                  <div className="text-xs sm:text-sm font-medium text-gray-700 mt-1">Verified Providers</div>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 sm:p-6 flex items-center gap-3 sm:gap-4 transition-transform hover:shadow-lg hover:scale-[1.03] min-w-[140px]">
                <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-yellow-500 flex-shrink-0">
                  <FaHourglassHalf className="text-xl sm:text-2xl text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-xl sm:text-2xl font-extrabold text-gray-900">{pendingReviews}</div>
                  <div className="text-xs sm:text-sm font-medium text-gray-700 mt-1">Pending Reviews</div>
                </div>
              </div>
            </div>
          )}

        

         

          {/* Tabs */}
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-0">
            <aside className="w-full lg:w-56 bg-white border border-gray-200 lg:border-r lg:border-b-0 rounded-lg lg:rounded-none p-4 lg:p-0">
              <nav className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible">
                {adminTabs.map(tabItem => (
                  <button
                    key={tabItem.id}
                    onClick={() => setTab(tabItem.id)}
                    className={`whitespace-nowrap lg:whitespace-normal text-left px-3 lg:px-4 py-2 rounded font-medium transition-colors ${tab === tabItem.id ? "bg-green-100 text-green-700" : "hover:bg-green-50 text-gray-700"}`}
                  >
                    {tabItem.label}
                  </button>
                ))}
              </nav>
            </aside>
            <main className="flex-1 p-4 lg:p-6 bg-white border border-gray-200 lg:border-l-0 rounded-lg lg:rounded-none">
              {/* Users Section */}
              {tab === "users" && (
                <div>
                  <h2 className="text-lg sm:text-xl font-bold mb-4 flex items-center gap-2 text-gray-900"><FaUsers /> Users</h2>
                  <input
                    type="text"
                    placeholder="Search users..."
                    value={userSearch}
                    onChange={e => setUserSearch(e.target.value)}
                    className="mb-4 px-3 py-2 border border-gray-300 rounded w-full sm:w-1/2 text-gray-900 text-sm sm:text-base"
                  />
                  <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border rounded text-xs sm:text-sm">
                      <thead>
                        <tr className="bg-green-50">
                          <th className="py-2 px-2 sm:px-4 text-gray-900">Name</th>
                          <th className="py-2 px-2 sm:px-4 text-gray-900">Email</th>
                          <th className="py-2 px-2 sm:px-4 text-gray-900">Status</th>
                          <th className="py-2 px-2 sm:px-4 text-gray-900">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredUsers.map(u => (
                          <tr key={u.id} className="border-b">
                            <td className="py-2 px-2 sm:px-4 text-gray-900">{u.name}</td>
                            <td className="py-2 px-2 sm:px-4 text-gray-900">{u.email}</td>
                            <td className="py-2 px-2 sm:px-4">
                              <span className={`px-2 py-1 rounded text-xs font-semibold text-gray-900 ${u.status === "active" ? "bg-green-100" : "bg-red-100"}`}>{u.status}</span>
                            </td>
                            <td className="py-2 px-2 sm:px-4">
                              <div className="flex flex-wrap gap-1 sm:gap-2">
                                <button onClick={() => toggleUserStatus(u.id)} className="text-xs px-2 py-1 rounded bg-green-500 text-white hover:bg-green-600">{u.status === "active" ? "Ban" : "Unban"}</button>
                                <button className="text-xs px-2 py-1 rounded bg-blue-500 text-white hover:bg-blue-600">Edit</button>
                                <button className="text-xs px-2 py-1 rounded bg-red-500 text-white hover:bg-red-600">Delete</button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
              {/* Providers Section */}
              {tab === "providers" && (
                <div>
                  <h2 className="text-lg sm:text-xl font-bold mb-4 flex items-center gap-2 text-gray-900"><FaBuilding /> Providers</h2>
                  <input
                    type="text"
                    placeholder="Search providers..."
                    value={providerSearch}
                    onChange={e => setProviderSearch(e.target.value)}
                    className="mb-4 px-3 py-2 border border-gray-300 rounded w-full sm:w-1/2 text-gray-900 text-sm sm:text-base"
                  />
                  <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border rounded text-xs sm:text-sm">
                      <thead>
                        <tr className="bg-green-50">
                          <th className="py-2 px-2 sm:px-4 text-gray-900">Name</th>
                          <th className="py-2 px-2 sm:px-4 text-gray-900">Owner</th>
                          <th className="py-2 px-2 sm:px-4 text-gray-900">Email</th>
                          <th className="py-2 px-2 sm:px-4 text-gray-900">Status</th>
                          <th className="py-2 px-2 sm:px-4 text-gray-900">Verified</th>
                          <th className="py-2 px-2 sm:px-4 text-gray-900">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredProviders.map(p => (
                          <tr key={p.id} className="border-b">
                            <td className="py-2 px-2 sm:px-4 text-gray-900">{p.name}</td>
                            <td className="py-2 px-2 sm:px-4 text-gray-900">{p.owner}</td>
                            <td className="py-2 px-2 sm:px-4 text-gray-900">{p.email}</td>
                            <td className="py-2 px-2 sm:px-4">
                              <span className={`px-2 py-1 rounded text-xs font-semibold text-gray-900 ${p.status === "active" ? "bg-green-100" : "bg-red-100"}`}>{p.status}</span>
                            </td>
                            <td className="py-2 px-2 sm:px-4">{p.verified ? <FaCheckCircle className="text-green-500 inline" /> : <FaHourglassHalf className="text-yellow-500 inline" />}</td>
                            <td className="py-2 px-2 sm:px-4">
                              <div className="flex flex-wrap gap-1 sm:gap-2">
                                <button onClick={() => toggleProviderStatus(p.id)} className="text-xs px-2 py-1 rounded bg-green-500 text-white hover:bg-green-600">{p.status === "active" ? "Ban" : "Unban"}</button>
                                <button onClick={() => handleVerify(p.id)} className="text-xs px-2 py-1 rounded bg-blue-500 text-white hover:bg-blue-600">Verify</button>
                                <button onClick={() => handleReject(p.id)} className="text-xs px-2 py-1 rounded bg-yellow-500 text-white hover:bg-yellow-600">Reject</button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
              {/* Provider Applications Section */}
              {tab === "providerApps" && (
                <div>
                  <h2 className="text-lg sm:text-xl font-bold mb-4 flex items-center gap-2 text-gray-900">Provider Applications</h2>
                  <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border rounded text-xs sm:text-sm">
                      <thead>
                        <tr className="bg-green-50">
                          <th className="py-2 px-2 sm:px-4 text-gray-900">Name</th>
                          <th className="py-2 px-2 sm:px-4 text-gray-900">Email</th>
                          <th className="py-2 px-2 sm:px-4 text-gray-900">Applied At</th>
                          <th className="py-2 px-2 sm:px-4 text-gray-900">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {providerApplications.map((app: ProviderApplication) => (
                          <tr key={app.id} className="border-b">
                            <td className="py-2 px-2 sm:px-4 text-gray-900">{app.name}</td>
                            <td className="py-2 px-2 sm:px-4 text-gray-900">{app.email}</td>
                            <td className="py-2 px-2 sm:px-4 text-gray-900">{app.appliedAt}</td>
                            <td className="py-2 px-2 sm:px-4">
                              <button
                                onClick={() => { setSelectedApplication(app); setShowApplicationModal(true); }}
                                className="text-xs px-2 py-1 rounded bg-blue-500 text-white hover:bg-blue-600"
                              >
                                Details
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  {/* Application Details Modal */}
                  {showApplicationModal && selectedApplication && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                      <div className="bg-white rounded-lg p-4 sm:p-6 w-full max-w-lg mx-auto overflow-y-auto max-h-[90vh]">
                        <div className="flex justify-between items-center mb-4">
                          <h3 className="text-lg font-semibold text-gray-900">Provider Application Details</h3>
                          <button
                            onClick={() => setShowApplicationModal(false)}
                            className="text-gray-400 hover:text-gray-600"
                          >
                            ✕
                          </button>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Business Name</label>
                            <input type="text" value={selectedApplication.business} disabled className="w-full px-3 py-2 border border-gray-200 rounded bg-gray-50 text-gray-900 text-sm" />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                            <input type="text" value={selectedApplication.name} disabled className="w-full px-3 py-2 border border-gray-200 rounded bg-gray-50 text-gray-900 text-sm" />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Business License</label>
                            <input type="text" value={selectedApplication.license} disabled className="w-full px-3 py-2 border border-gray-200 rounded bg-gray-50 text-gray-900 text-sm" />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">NID Number</label>
                            <input type="text" value={selectedApplication.nid} disabled className="w-full px-3 py-2 border border-gray-200 rounded bg-gray-50 text-gray-900 text-sm" />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Govt ID or TIN</label>
                            <input type="text" value={selectedApplication.nid} disabled className="w-full px-3 py-2 border border-gray-200 rounded bg-gray-50 text-gray-900 text-sm" />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Facebook Profile</label>
                            <input type="text" value={selectedApplication.facebook} disabled className="w-full px-3 py-2 border border-gray-200 rounded bg-gray-50 text-gray-900 text-sm" />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Website Link</label>
                            <input type="text" value={selectedApplication.website} disabled className="w-full px-3 py-2 border border-gray-200 rounded bg-gray-50 text-gray-900 text-sm" />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Area Name</label>
                            <input type="text" value={selectedApplication.area} disabled className="w-full px-3 py-2 border border-gray-200 rounded bg-gray-50 text-gray-900 text-sm" />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                            <input type="text" value={selectedApplication.phone} disabled className="w-full px-3 py-2 border border-gray-200 rounded bg-gray-50 text-gray-900 text-sm" />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Postal Code</label>
                            <input type="text" value={selectedApplication.area} disabled className="w-full px-3 py-2 border border-gray-200 rounded bg-gray-50 text-gray-900 text-sm" />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                            <input type="text" value={selectedApplication.category} disabled className="w-full px-3 py-2 border border-gray-200 rounded bg-gray-50 text-gray-900 text-sm" />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                            <input type="text" value={selectedApplication.email} disabled className="w-full px-3 py-2 border border-gray-200 rounded bg-gray-50 text-gray-900 text-sm" />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                            <input type="text" value={selectedApplication.status} disabled className="w-full px-3 py-2 border border-gray-200 rounded bg-gray-50 text-gray-900 text-sm" />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Applied At</label>
                            <input type="text" value={selectedApplication.appliedAt} disabled className="w-full px-3 py-2 border border-gray-200 rounded bg-gray-50 text-gray-900 text-sm" />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Documents</label>
                            <input type="text" value={selectedApplication.documents.join(", ")} disabled className="w-full px-3 py-2 border border-gray-200 rounded bg-gray-50 text-gray-900 text-sm" />
                          </div>
                        </div>
                        <div className="mb-4">
                          <label className="block text-sm font-medium text-gray-700 mb-1">Admin Comment</label>
                          <textarea
                            value={applicationComment}
                            onChange={e => setApplicationComment(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded text-gray-900 text-sm"
                            rows={2}
                            placeholder="Add a comment or reason for verification/rejection..."
                          />
                        </div>
                        <div className="mt-6 flex flex-col sm:flex-row justify-end gap-2">
                          <button
                            onClick={() => {
                              setProviderApplications(apps => apps.filter(a => a.id !== selectedApplication.id));
                              setShowApplicationModal(false);
                              setApplicationComment("");
                            }}
                            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded text-sm"
                          >
                            Verify
                          </button>
                          <button
                            onClick={() => {
                              setProviderApplications(apps => apps.filter(a => a.id !== selectedApplication.id));
                              setShowApplicationModal(false);
                              setApplicationComment("");
                            }}
                            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded text-sm"
                          >
                            Reject
                          </button>
                          <button
                            onClick={() => setShowApplicationModal(false)}
                            className="bg-gray-300 hover:bg-gray-400 text-gray-900 px-4 py-2 rounded text-sm"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
              {/* Orders Section */}
              {tab === "orders" && (
                <div>
                  <h2 className="text-lg sm:text-xl font-bold mb-4 flex items-center gap-2 text-gray-900"><FaHistory /> Orders</h2>
                  <input
                    type="text"
                    placeholder="Search orders..."
                    value={orderSearch}
                    onChange={e => setOrderSearch(e.target.value)}
                    className="mb-4 px-3 py-2 border border-gray-300 rounded w-full sm:w-1/2 text-gray-900 text-sm sm:text-base"
                  />
                  <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border rounded text-xs sm:text-sm">
                      <thead>
                        <tr className="bg-green-50">
                          <th className="py-2 px-2 sm:px-4 text-gray-900">User</th>
                          <th className="py-2 px-2 sm:px-4 text-gray-900">Provider</th>
                          <th className="py-2 px-2 sm:px-4 text-gray-900">Service</th>
                          <th className="py-2 px-2 sm:px-4 text-gray-900">Status</th>
                          <th className="py-2 px-2 sm:px-4 text-gray-900">Date</th>
                          <th className="py-2 px-2 sm:px-4 text-gray-900">Price</th>
                          <th className="py-2 px-2 sm:px-4 text-gray-900">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {orders.filter(o =>
                          o.user.toLowerCase().includes(orderSearch.toLowerCase()) ||
                          o.provider.toLowerCase().includes(orderSearch.toLowerCase()) ||
                          o.service.toLowerCase().includes(orderSearch.toLowerCase())
                        ).map(o => (
                          <tr key={o.id} className="border-b">
                            <td className="py-2 px-2 sm:px-4 text-gray-900">{o.user}</td>
                            <td className="py-2 px-2 sm:px-4 text-gray-900">{o.provider}</td>
                            <td className="py-2 px-2 sm:px-4 text-gray-900">{o.service}</td>
                            <td className="py-2 px-2 sm:px-4">
                              <span className={`px-2 py-1 rounded text-xs font-semibold text-gray-900 ${o.status === "completed" ? "bg-green-100" : o.status === "pending" ? "bg-yellow-100" : "bg-blue-100"}`}>{o.status}</span>
                            </td>
                            <td className="py-2 px-2 sm:px-4 text-gray-900">{o.date}</td>
                            <td className="py-2 px-2 sm:px-4 text-gray-900">৳{o.price}</td>
                            <td className="py-2 px-2 sm:px-4">
                              <div className="flex flex-wrap gap-1 sm:gap-2">
                                <button className="text-xs px-2 py-1 rounded bg-blue-500 text-white hover:bg-blue-600">View</button>
                                <button className="text-xs px-2 py-1 rounded bg-yellow-500 text-white hover:bg-yellow-600">Update</button>
                                <button className="text-xs px-2 py-1 rounded bg-red-500 text-white hover:bg-red-600">Cancel</button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
              {/* Categories Section */}
              {tab === "categories" && (
                <div>
                  <h2 className="text-lg sm:text-xl font-bold mb-4 flex items-center gap-2 text-gray-900"><FaSearch /> Categories</h2>
                  <div className="flex flex-col sm:flex-row gap-2 mb-4">
                    <input
                      type="text"
                      placeholder="Add new category..."
                      value={newCategory}
                      onChange={e => setNewCategory(e.target.value)}
                      className="px-3 py-2 border border-gray-300 rounded text-gray-900 w-full sm:w-auto text-sm sm:text-base"
                    />
                    <button
                      onClick={handleAddCategory}
                      className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded text-sm sm:text-base"
                    >
                      Add Category
                    </button>
                  </div>
                  <input
                    type="text"
                    placeholder="Search categories..."
                    value={categorySearch}
                    onChange={e => setCategorySearch(e.target.value)}
                    className="mb-4 px-3 py-2 border border-gray-300 rounded w-full sm:w-1/2 text-gray-900 text-sm sm:text-base"
                  />
                  <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border rounded text-xs sm:text-sm">
                      <thead>
                        <tr className="bg-green-50">
                          <th className="py-2 px-2 sm:px-4 text-gray-900">Name</th>
                          <th className="py-2 px-2 sm:px-4 text-gray-900">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {categories.filter(c =>
                          c.name.toLowerCase().includes(categorySearch.toLowerCase())
                        ).map(c => (
                          <tr key={c.id} className="border-b">
                            <td className="py-2 px-2 sm:px-4 text-gray-900">
                              {editingCategoryId === c.id ? (
                                <input
                                  type="text"
                                  value={editingCategoryName}
                                  onChange={e => setEditingCategoryName(e.target.value)}
                                  className="px-2 py-1 border border-gray-300 rounded text-gray-900 text-sm"
                                />
                              ) : (
                                c.name
                              )}
                            </td>
                            <td className="py-2 px-2 sm:px-4">
                              <div className="flex flex-wrap gap-1 sm:gap-2">
                                {editingCategoryId === c.id ? (
                                  <>
                                    <button onClick={() => handleSaveEditCategory(c.id)} className="text-xs px-2 py-1 rounded bg-green-500 text-white hover:bg-green-600">Save</button>
                                    <button onClick={() => setEditingCategoryId(null)} className="text-xs px-2 py-1 rounded bg-gray-300 text-gray-900 hover:bg-gray-400">Cancel</button>
                                  </>
                                ) : (
                                  <>
                                    <button onClick={() => handleEditCategory(c.id)} className="text-xs px-2 py-1 rounded bg-blue-500 text-white hover:bg-blue-600">Edit</button>
                                    <button onClick={() => handleDeleteCategory(c.id)} className="text-xs px-2 py-1 rounded bg-red-500 text-white hover:bg-red-600">Delete</button>
                                  </>
                                )}
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
              {/* Reviews Section */}
              {tab === "reviews" && (
                <div>
                  <h2 className="text-lg sm:text-xl font-bold mb-4 flex items-center gap-2 text-gray-900"><FaUserCheck /> Reviews</h2>
                  <input
                    type="text"
                    placeholder="Search reviews..."
                    value={reviewSearch}
                    onChange={e => setReviewSearch(e.target.value)}
                    className="mb-4 px-3 py-2 border border-gray-300 rounded w-full sm:w-1/2 text-gray-900 text-sm sm:text-base"
                  />
                  <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border rounded text-xs sm:text-sm">
                      <thead>
                        <tr className="bg-green-50">
                          <th className="py-2 px-2 sm:px-4 text-gray-900">User</th>
                          <th className="py-2 px-2 sm:px-4 text-gray-900">Provider</th>
                          <th className="py-2 px-2 sm:px-4 text-gray-900">Rating</th>
                          <th className="py-2 px-2 sm:px-4 text-gray-900">Comment</th>
                          <th className="py-2 px-2 sm:px-4 text-gray-900">Status</th>
                          <th className="py-2 px-2 sm:px-4 text-gray-900">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {reviews.filter(r =>
                          r.user.toLowerCase().includes(reviewSearch.toLowerCase()) ||
                          r.provider.toLowerCase().includes(reviewSearch.toLowerCase()) ||
                          r.comment.toLowerCase().includes(reviewSearch.toLowerCase())
                        ).map(r => (
                          <tr key={r.id} className="border-b">
                            <td className="py-2 px-2 sm:px-4 text-gray-900">{r.user}</td>
                            <td className="py-2 px-2 sm:px-4 text-gray-900">{r.provider}</td>
                            <td className="py-2 px-2 sm:px-4 text-gray-900">{r.rating} ⭐</td>
                            <td className="py-2 px-2 sm:px-4 text-gray-900">{r.comment}</td>
                            <td className="py-2 px-2 sm:px-4">
                              <span className={`px-2 py-1 rounded text-xs font-semibold text-gray-900 ${r.status === "approved" ? "bg-green-100" : r.status === "pending" ? "bg-yellow-100" : "bg-red-100"}`}>{r.status}</span>
                            </td>
                            <td className="py-2 px-2 sm:px-4">
                              <div className="flex flex-wrap gap-1 sm:gap-2">
                                <button className="text-xs px-2 py-1 rounded bg-green-500 text-white hover:bg-green-600">Approve</button>
                                <button className="text-xs px-2 py-1 rounded bg-yellow-500 text-white hover:bg-yellow-600">Flag</button>
                                <button className="text-xs px-2 py-1 rounded bg-red-500 text-white hover:bg-red-600">Delete</button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
              {/* Analytics Section */}
              {tab === "analytics" && (
                <div>
                  <h2 className="text-lg sm:text-xl font-bold mb-4 flex items-center gap-2 text-gray-900"><FaSearch /> Analytics</h2>
                  {/* Example: show user/provider stats and a chart */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6">
                    <div className="bg-green-50 rounded-lg p-4">
                      <div className="text-base sm:text-lg font-bold text-green-700">Total Users</div>
                      <div className="text-xl sm:text-2xl font-bold">{totalUsers}</div>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4">
                      <div className="text-base sm:text-lg font-bold text-green-700">Total Providers</div>
                      <div className="text-xl sm:text-2xl font-bold">{totalProviders}</div>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <Line
                      data={{
                        labels: userChartData[userChartTab].labels,
                        datasets: [
                          {
                            label: "Users",
                            data: userChartData[userChartTab].data,
                            borderColor: "#22c55e",
                            backgroundColor: "#bbf7d0",
                          },
                        ],
                      }}
                      options={{
                        responsive: true,
                        plugins: {
                          legend: { display: false },
                          title: { display: true, text: "User Growth" },
                        },
                      }}
                    />
                    <div className="flex flex-wrap gap-2 mt-4">
                      <button onClick={() => setUserChartTab('daily')} className={`px-3 py-1 rounded text-sm ${userChartTab === 'daily' ? 'bg-green-500 text-white' : 'bg-green-50 text-green-700'}`}>Daily</button>
                      <button onClick={() => setUserChartTab('monthly')} className={`px-3 py-1 rounded text-sm ${userChartTab === 'monthly' ? 'bg-green-500 text-white' : 'bg-green-50 text-green-700'}`}>Monthly</button>
                      <button onClick={() => setUserChartTab('yearly')} className={`px-3 py-1 rounded text-sm ${userChartTab === 'yearly' ? 'bg-green-500 text-white' : 'bg-green-50 text-green-700'}`}>Yearly</button>
                    </div>
                  </div>
                </div>
              )}
              {/* Settings Section */}
              {tab === "settings" && (
                <div>
                  <h2 className="text-lg sm:text-xl font-bold mb-4 flex items-center gap-2 text-gray-900"><FaUserTimes /> Settings</h2>
                  <div className="bg-white rounded-lg p-4">
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Platform Name</label>
                      <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded text-sm" defaultValue="JustKaaj" />
                    </div>
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Support Email</label>
                      <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded text-sm" defaultValue="support@justkaaj.com" />
                    </div>
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Legal/Policy Link</label>
                      <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded text-sm" defaultValue="/policy" />
                    </div>
                    <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded text-sm">Save Settings</button>
                  </div>
                </div>
              )}
            </main>
          </div>
           {/* new code  */}
         {/* Growth Charts */}
         <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 mt-8">Growth Rate</h2>
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <span className="loader border-4 border-green-500 border-t-transparent rounded-full w-10 h-10 animate-spin"></span>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-8">
              {/* User Growth Chart */}
              <div className="bg-white rounded-lg shadow p-4 sm:p-5">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-2">
                  <span className="font-semibold text-gray-900 text-sm sm:text-base">User Growth</span>
                  <div className="flex gap-1 sm:gap-2">
                    <button onClick={() => setUserChartTab('daily')} className={`px-2 py-1 rounded text-xs font-medium ${userChartTab === 'daily' ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-900'}`}>Daily</button>
                    <button onClick={() => setUserChartTab('monthly')} className={`px-2 py-1 rounded text-xs font-medium ${userChartTab === 'monthly' ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-900'}`}>Monthly</button>
                    <button onClick={() => setUserChartTab('yearly')} className={`px-2 py-1 rounded text-xs font-medium ${userChartTab === 'yearly' ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-900'}`}>Yearly</button>
                  </div>
                </div>
                <Line
                  data={{
                    labels: userChartData[userChartTab].labels,
                    datasets: [
                      {
                        label: 'Users',
                        data: userChartData[userChartTab].data,
                        borderColor: '#22c55e',
                        backgroundColor: 'rgba(34,197,94,0.1)',
                        tension: 0.4,
                        pointRadius: 4,
                        pointBackgroundColor: '#22c55e',
                      },
                    ],
                  }}
                  options={chartOptions}
                  height={220}
                />
              </div>
              {/* Provider Growth Chart */}
              <div className="bg-white rounded-lg shadow p-4 sm:p-5">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-2">
                  <span className="font-semibold text-gray-900 text-sm sm:text-base">Provider Growth</span>
                  <div className="flex gap-1 sm:gap-2">
                    <button onClick={() => setProviderChartTab('daily')} className={`px-2 py-1 rounded text-xs font-medium ${providerChartTab === 'daily' ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-900'}`}>Daily</button>
                    <button onClick={() => setProviderChartTab('monthly')} className={`px-2 py-1 rounded text-xs font-medium ${providerChartTab === 'monthly' ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-900'}`}>Monthly</button>
                    <button onClick={() => setProviderChartTab('yearly')} className={`px-2 py-1 rounded text-xs font-medium ${providerChartTab === 'yearly' ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-900'}`}>Yearly</button>
                  </div>
                </div>
                <Line
                  data={{
                    labels: providerChartData[providerChartTab].labels,
                    datasets: [
                      {
                        label: 'Providers',
                        data: providerChartData[providerChartTab].data,
                        borderColor: '#3b82f6',
                        backgroundColor: 'rgba(59,130,246,0.1)',
                        tension: 0.4,
                        pointRadius: 4,
                        pointBackgroundColor: '#3b82f6',
                      },
                    ],
                  }}
                  options={chartOptions}
                  height={220}
                />
              </div>
            </div>
          )} 
        {/* new code */}
         {/* Recent Activity */}
         <div className="mb-8">
            <div className="bg-white rounded-lg shadow p-4 sm:p-5">
              <div className="flex items-center gap-2 mb-4">
                <FaHistory className="text-lg sm:text-xl text-gray-900" />
                <span className="font-semibold text-gray-900 text-sm sm:text-base">Recent Activity</span>
              </div>
              <ul className="divide-y divide-gray-100">
                {mockActivity.map(act => (
                  <li key={act.id} className="py-2 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-xs sm:text-sm">
                    <div className="flex items-center gap-2">
                      <span className={`inline-block w-2 h-2 rounded-full ${act.type === "ban" ? "bg-red-500" : act.type === "verify" ? "bg-green-500" : "bg-yellow-500"}`}></span>
                      <span className="font-medium text-gray-900">{act.who}</span>
                      <span className="text-gray-900">({act.role})</span>
                    </div>
                    <div className="flex items-center gap-2 sm:ml-auto">
                      <span className="text-gray-700">{act.date}</span>
                      <span className="text-xs text-gray-900">{act.type === "ban" ? "Banned" : act.type === "verify" ? "Verified" : "Review Requested"}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
       
      </div>
       
      <Footer />
    </div>
  );
} 
