// src/app/page.tsx
'use client'

import { motion } from 'framer-motion'
import { Shield, Users, Rocket, Target, Heart, Star } from 'lucide-react'

export default function CompanyPage() {
    const values = [
        {
            icon: <Shield className="w-8 h-8" />,
            title: "Trust & Reliability",
            description: "We build lasting relationships based on trust and consistent delivery of excellence."
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: "Collaboration",
            description: "Working together with our clients to achieve extraordinary results through partnership."
        },
        {
            icon: <Rocket className="w-8 h-8" />,
            title: "Innovation",
            description: "Pushing boundaries with cutting-edge solutions and forward-thinking approaches."
        },
        {
            icon: <Target className="w-8 h-8" />,
            title: "Excellence",
            description: "Committed to the highest standards of quality in everything we deliver."
        },
        {
            icon: <Heart className="w-8 h-8" />,
            title: "Passion",
            description: "Driven by genuine passion for creating meaningful impact and value."
        },
        {
            icon: <Star className="w-8 h-8" />,
            title: "Quality",
            description: "Uncompromising dedication to craftsmanship and attention to detail."
        }
    ]

    return (
        // Bagian <nav> sudah dihapus dari sini.
        // Kita ganti div pembungkus utama menjadi <main> untuk semantic HTML yang lebih baik.
        <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
            {/* Hero Section */}
            <section className="container mx-auto px-6 py-20 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto"
                >
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6"
                    >
                        Welcome to{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                            Our Company!
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-xl md:text-2xl text-gray-600 mb-8 font-light"
                    >
                        What we stand for
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"
                    />
                </motion.div>
            </section>

            {/* Values Grid */}
            <section className="container mx-auto px-6 py-16">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
                >
                    {values.map((value, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 + index * 0.1 }}
                            whileHover={{
                                scale: 1.05,
                                y: -5,
                                transition: { duration: 0.2 }
                            }}
                            className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100"
                        >
                            <div className="text-blue-600 mb-4 p-3 bg-blue-50 rounded-lg w-fit">
                                {value.icon}
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                                {value.title}
                            </h3>

                            <p className="text-gray-600 leading-relaxed">
                                {value.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* CTA Section */}
            <section className="container mx-auto px-6 py-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center text-white max-w-4xl mx-auto"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Ready to Work Together?
                    </h2>
                    <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                        Let's bring your vision to life with our expertise and passion for excellence.
                    </p>
                    <div className="flex gap-4 justify-center flex-wrap">
                        <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                            Get Started
                        </button>
                        <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                            Learn More
                        </button>
                    </div>
                </motion.div>
            </section>

            {/* Footer */}
            <footer className="container mx-auto px-6 py-8 text-center text-gray-500">
                <p>© {new Date().getFullYear()} Our Company. All rights reserved.</p>
            </footer>
        </main>
    )
}