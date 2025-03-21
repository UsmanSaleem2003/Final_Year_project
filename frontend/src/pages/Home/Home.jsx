import React from "react";
import "./Home.css";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, AreaChart, Area, CartesianGrid, PieChart, Pie, Cell, Legend } from "recharts";
import { FaBars } from "react-icons/fa";
import phishing_email_icon from "../../components/Assets/phishing_home_icon.png"
import total_emails_icon from "../../components/Assets/email_home_icon.png"
import total_attacks_icon from "../../components/Assets/attack_home_icon.png"
import mitigated_attacks_icon from "../../components/Assets/mitigated_home_icon.png"



const barData = [
    { "name": 2005, "detected": 860, "total": 1200 },
    { "name": 2006, "detected": 1130, "total": 1300 },
    { "name": 2008, "detected": 1154, "total": 1400 },
    { "name": 2010, "detected": 1162, "total": 1500 },
    { "name": 2011, "detected": 893, "total": 1000 },
    { "name": 2013, "detected": 945, "total": 1100 },
    { "name": 2015, "detected": 672, "total": 750 },
    { "name": 2017, "detected": 837, "total": 950 },
    { "name": 2018, "detected": 801, "total": 920 },
    { "name": 2020, "detected": 601, "total": 1400 },
    { "name": 2022, "detected": 869, "total": 1000 },
    { "name": 2024, "detected": 847, "total": 900 }
]



const areaData = [
    { name: "Jan", "total": 30, "detected": 10 },
    { name: "Feb", "total": 70, "detected": 50 },
    { name: "Mar", "total": 40, "detected": 30 },
    { name: "Apr", "total": 99, "detected": 60 },
    { name: "May", "total": 50, "detected": 20 },
    { name: "Jun", "total": 95, "detected": 80 },
    { name: "Jul", "total": 60, "detected": 40 },
    { name: "Aug", "total": 80, "detected": 70 },
    { name: "Sep", "total": 30, "detected": 10 },
    { name: "Oct", "total": 75, "detected": 55 },
    { name: "Nov", "total": 45, "detected": 25 },
    { name: "Dec", "total": 90, "detected": 85 },
];

const pieData = [
    { name: "Filled", value: 45 },
    { name: "Remaining", value: 55 },
];

const colors = ["#0D2C56", "#F5A623"];

const Dashboard = () => {
    return (
        <div className="dashboard">
            <div className="header">
                <p className="user-dashboard-text">User Dashboard</p>
                <FaBars className="hamburger-icon" />
            </div>

            <div className="top-cards">
                <div className="card earning">
                    <div className="card-header">
                        <h3>Total Attacks</h3>
                        <img src={total_attacks_icon} className="card-icon" alt="dollar_icon" />
                    </div>
                    <p className="card-value">3628</p>
                </div>

                <div className="card sharing">
                    <div className="card-header">
                        <h3>Mitigated Attacks</h3>
                        <img src={mitigated_attacks_icon} className="card-icon" alt="share_icon" />
                    </div>
                    <p className="card-value">2434</p>
                </div>

                <div className="card liking">
                    <div className="card-header">
                        <h3>Total Emails</h3>
                        <img src={total_emails_icon} className="card-icon" alt="like_icon" />
                    </div>
                    <p className="card-value">12.59K</p>
                </div>

                <div className="card rating">
                    <div className="card-header">
                        <h3>Phishing Emails</h3>
                        <img src={phishing_email_icon} className="card-icon" alt="star_icon" />
                    </div>
                    <p className="card-value">4.5K</p>
                </div>
            </div>

            <div className="chart">
                <div className="vertical-charts">
                    <div className="chart-container">
                        <h3>Result</h3>
                        <ResponsiveContainer width="100%" height={150}>
                            <BarChart data={barData}>
                                <XAxis dataKey="name" />
                                <YAxis domain={[0, 1600]} tickCount={5} />
                                <Tooltip />
                                <Legend />
                                <CartesianGrid strokeDasharray="3 3" stroke="lightgrey" vertical={false} />
                                <Bar dataKey="detected" fill="rgba(0, 43, 91, 0.9)" name="Detected Phishing Emails" />
                                <Bar dataKey="total" fill="rgba(255, 159, 0, 0.9)" name="Total Emails Received" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>

                    <div className="chart-container">
                        <h3>Analysis</h3>
                        <ResponsiveContainer width="100%" height={150}>
                            <AreaChart data={areaData}>
                                <defs>
                                    <linearGradient id="colorValue1" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#002b5b" stopOpacity={0.8} />
                                        <stop offset="95%" stopColor="#002b5b" stopOpacity={0} />
                                    </linearGradient>
                                    <linearGradient id="colorValue2" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#ff9f00" stopOpacity={0.8} />
                                        <stop offset="95%" stopColor="#ff9f00" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <XAxis dataKey="name" />
                                <YAxis />
                                <CartesianGrid strokeDasharray="3 3" stroke="lightgrey" vertical={false} />
                                <Tooltip />
                                <Legend
                                    payload={[
                                        {
                                            value: "Detected Phishing Emails", type: "square", color: "#ff9f00"
                                        },
                                        { value: "Total Emails Received", type: "square", color: "#002b5b" }
                                    ]}
                                />
                                <Area
                                    type="basis"
                                    dataKey="total"
                                    fill="url(#colorValue1)"
                                    stroke="#002b5b"
                                    strokeWidth={2}
                                    strokeOpacity={0.9}
                                />
                                <Area
                                    type="basis"
                                    dataKey="detected"
                                    fill="url(#colorValue2)"
                                    stroke="#ff9f00"
                                    strokeWidth={2}
                                    strokeOpacity={0.9}
                                />
                                <Bar dataKey="detected" fill="rgba(0, 43, 91, 0.9)" name="Detected Phishing Emails" />
                                <Bar dataKey="total" fill="rgba(255, 159, 0, 0.9)" name="Total Emails Received" />

                            </AreaChart>
                        </ResponsiveContainer>
                    </div>

                </div>


                <div className="side-chart">
                    <div className="ppie">
                        <PieChart width={120} height={120}>
                            <Pie
                                data={pieData}
                                dataKey="value"
                                cx="50%"
                                cy="50%"
                                innerRadius={30}
                                outerRadius={55}
                                startAngle={90}
                                endAngle={-270}
                            >
                                {pieData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={colors[index]} />
                                ))}
                            </Pie>
                        </PieChart>
                    </div>

                    <div className="percentage-label">45%</div>

                    <p className="pie-text">Lorem Ipsum</p>
                    <p className="pie-text">Lorem Ipsum</p>
                    <p className="pie-text">Lorem Ipsum</p>

                    <button className="check-btn">Check Now</button>

                </div>
            </div>

        </div>
    );
};

export default Dashboard;
