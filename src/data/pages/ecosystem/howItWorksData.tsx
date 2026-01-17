import { CgNotes } from "react-icons/cg";
import { FaShieldAlt } from "react-icons/fa";
import { FaChartLine, FaLock, FaUnlock, FaUsers } from "react-icons/fa6";
import { GiArcheryTarget, GiBrain, GiCheckMark } from "react-icons/gi";
import { IoStatsChart } from "react-icons/io5";

export const howItWorkstabsData = [
  {
    id: "core",
    label: "AI-Powered Core",
    icon: <GiBrain />,
    content: (
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            Centralized AI Engine
          </h3>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            At the heart of ibigdata lies a powerful AI core that orchestrates every aspect
            of your business operations. This intelligent nucleus automatically manages
            users, analyzes data patterns, generates insights, and optimizes workflows
            across all connected CRM systems.
          </p>
          <div className="space-y-4">
            {[
              { title: "Unified Data Hub", desc: "All your business data in one intelligent system" },
              { title: "Real-time Analytics", desc: "Instant insights powered by machine learning" },
              { title: "Automated Workflows", desc: "AI decides and executes routine tasks automatically" },
              { title: "Predictive Intelligence", desc: "Forecasts trends before they happen" },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-cyan-50 hover:bg-cyan-100 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-600 to-blue-600 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-3xl blur-2xl opacity-20" />
          <div className="relative bg-gradient-to-br from-cyan-600 to-blue-600 rounded-3xl p-8 shadow-2xl">
            <div className="aspect-square bg-white/10 rounded-2xl backdrop-blur-sm flex items-center justify-center">
              <svg className="w-32 h-32 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "intelligence",
    label: "Industry Intelligence",
    icon: <GiArcheryTarget/>,
    content: (
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1">
          <div className="grid grid-cols-2 gap-4">
            {[
              { industry: "Healthcare", tasks: "1.2M", accuracy: "98.5%" },
              { industry: "Real Estate", tasks: "890K", accuracy: "97.8%" },
              { industry: "E-commerce", tasks: "2.1M", accuracy: "99.1%" },
              { industry: "Finance", tasks: "1.5M", accuracy: "98.9%" },
            ].map((stat, i) => (
              <div key={i} className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border-2 border-gray-200 hover:border-cyan-400 hover:shadow-lg transition-all">
                <div className="text-3xl mb-2"><IoStatsChart  className="text-green-500"/></div>
                <h4 className="font-bold text-gray-900 mb-1">{stat.industry}</h4>
                <div className="text-sm text-gray-600">
                  <div>{stat.tasks} automated tasks</div>
                  <div className="text-green-600 font-semibold">{stat.accuracy} accuracy</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            Industry-Specific AI Intelligence
          </h3>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Each vertical CRM is pre-trained with industry-specific knowledge and best practices.
            The AI understands the unique workflows, terminology, and challenges of your sector,
            automatically handling lead qualification, task prioritization, and decision-making
            with expert-level precision.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-cyan-600" />
              <span className="text-gray-700">Pre-trained on millions of industry-specific transactions</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-cyan-600" />
              <span className="text-gray-700">Continuously learns from your business patterns</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-cyan-600" />
              <span className="text-gray-700">Adapts to regulatory changes automatically</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-cyan-600" />
              <span className="text-gray-700">Provides predictive recommendations in real-time</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "scaling",
    label: "Self-Scaling",
    icon: <FaChartLine />,
    content: (
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            Infrastructure That Grows With You
          </h3>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Built on AI-ready cloud architecture, ibigdata automatically scales resources
            based on demand. Whether you're a startup or enterprise, the system adapts
            seamlessly to your growth without manual intervention or performance degradation.
          </p>
          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 mb-6">
            <h4 className="font-bold text-gray-900 mb-4">Auto-Scaling Capabilities</h4>
            <div className="space-y-3">
              {[
                "Handles 10 to 10 million users seamlessly",
                "Zero downtime during traffic spikes",
                "Automatic database sharding and optimization",
                "Global CDN with edge computing",
                "Elastic resource allocation"
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <div className="bg-white rounded-2xl border-2 border-gray-200 p-8 shadow-lg">
            <h4 className="text-xl font-bold text-gray-900 mb-6 text-center">Performance Metrics</h4>
            <div className="space-y-6">
              {[
                { label: "Response Time", value: "< 50ms", percent: 99 },
                { label: "Uptime SLA", value: "99.99%", percent: 99.99 },
                { label: "Auto-Scale Speed", value: "< 30s", percent: 95 },
              ].map((metric, i) => (
                <div key={i}>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-gray-900">{metric.label}</span>
                    <span className="text-cyan-600 font-bold">{metric.value}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-cyan-600 to-blue-600 h-3 rounded-full transition-all duration-1000"
                      style={{ width: `${metric.percent}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "security",
    label: "AI Security",
    icon: <FaLock />,
    content: (
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-emerald-400 rounded-3xl blur-2xl opacity-20" />
            <div className="relative bg-gradient-to-br from-green-600 to-emerald-600 rounded-3xl p-8 shadow-2xl">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: <FaUnlock />, label: "256-bit AES" },
                  { icon: <FaShieldAlt />, label: "Real-time Monitoring" },
                  { icon: <GiCheckMark />, label: "SOC 2 Certified" },
                  { icon: <FaLock/>, label: "GDPR Compliant" },
                ].map((item, i) => (
                  <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                    <div className="text-4xl mb-2 text-green-100">{item.icon}</div>
                    <div className="text-gray-800 font-semibold text-sm">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            AI-Monitored Security
          </h3>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Security is not an afterthought—it's built into every layer. Our AI continuously
            monitors for threats, anomalies, and unauthorized access patterns, responding
            in real-time to protect your data. Role-based access controls ensure users only
            see what they need.
          </p>
          <div className="space-y-4">
            {[
              {
                title: "AI Threat Detection",
                desc: "Machine learning identifies suspicious patterns before breaches occur",
                icon: <GiArcheryTarget />
              },
              {
                title: "End-to-End Encryption",
                desc: "All data encrypted at rest and in transit with enterprise-grade protocols",
                icon: <FaUnlock />
              },
              {
                title: "Compliance Automation",
                desc: "Automatically maintain GDPR, HIPAA, SOC 2, and other regulatory standards",
                icon: <CgNotes />
              },
              {
                title: "Granular Access Control",
                desc: "AI-powered role management with dynamic permission assignment",
                icon: <FaUsers/>
              },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-green-50 hover:bg-green-100 transition-colors border border-green-200">
                <div className="text-2xl text-cyan-600">{item.icon}</div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
];
