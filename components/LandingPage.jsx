import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import newsImage1 from "../src/assets/wow-reading.gif";
import { ArrowRight } from "lucide-react";

const LandingPage = () => {
  const features = [
    {
      title: "AI-Powered Summaries",
      description: "Get concise summaries of lengthy news articles in seconds",
      icon: "📝",
      color: "bg-purple-100 border-purple-500",
    },
    {
      title: "Question Generation",
      description: "Automatically generate questions for quick revision of facts",
      icon: "❓",
      color: "bg-blue-100 border-blue-500",
    },
    {
      title: "Current Affairs",
      description: "Perfect for competitive exam preparation",
      icon: "📚",
      color: "bg-green-100 border-green-500",
    },
    {
      title: "Student Focused",
      description: "Save and retrieve summarized news for later study",
      icon: "🎓",
      color: "bg-orange-100 border-orange-500",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/30"></div>
          <img
            src={newsImage1}
            alt="News Background"
            className="w-full h-full object-cover"
          />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Smarter News Consumption
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto">
            AI-powered summarization for students and competitive exam aspirants
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Link
              to="/login"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 inline-block shadow-lg"
            >
              Get Started
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Revolutionize Your News Reading
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our platform transforms how students and aspirants consume current affairs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-6 rounded-xl shadow-lg border-t-4 ${feature.color} hover:shadow-xl transition-shadow`}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50 relative">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Three simple steps to smarter news consumption
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Step 1 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center relative z-10"
            >
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-3xl text-white">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">
                Select News
              </h3>
              <p className="text-gray-600">
                Choose from trending news articles or paste any news URL
              </p>
            </motion.div>

            {/* Arrow 1 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="hidden md:flex items-center justify-center absolute left-1/3 top-1/4 transform -translate-x-1/2 -translate-y-1/2 z-0"
            >
              <ArrowRight className="w-12 h-12 text-purple-400" />
            </motion.div>

            {/* Step 2 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center relative z-10"
            >
              <div className="bg-gradient-to-br from-blue-500 to-teal-400 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-3xl text-white">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">
                Get Summary
              </h3>
              <p className="text-gray-600">
                Our AI generates a concise summary with key points
              </p>
            </motion.div>

            {/* Arrow 2 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="hidden md:flex items-center justify-center absolute left-2/3 top-1/4 transform -translate-x-1/2 -translate-y-1/2 z-0"
            >
              <ArrowRight className="w-12 h-12 text-blue-400" />
            </motion.div>

            {/* Step 3 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center relative z-10"
            >
              <div className="bg-gradient-to-br from-green-500 to-emerald-400 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-3xl text-white">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">
                Revise Smartly
              </h3>
              <p className="text-gray-600">
                Generate questions and save summaries for quick revision
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your News Reading?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join thousands of students who are studying smarter, not harder
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/login"
                className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 inline-block shadow-lg"
              >
                Start Now — It's Free
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;