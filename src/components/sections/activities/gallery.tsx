'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, Users } from 'lucide-react';
import { AnimatedCard } from '@/components/ui/card';

const activities = [
  {
    title: 'X-Camp',
    titleZh: 'X-Camp 夏令营',
    description: 'Intensive summer camp focusing on interdisciplinary projects',
    descriptionZh: '聚焦跨学科项目的暑期集训营',
    date: '2025-07',
    location: 'Shenzhen',
    capacity: '30',
    color: 'from-purple-400 to-purple-600',
  },
  {
    title: 'Night at OWL',
    titleZh: '猫头鹰之夜',
    description: 'Monthly evening sessions exploring cutting-edge science',
    descriptionZh: '每月探索前沿科学的夜间活动',
    date: 'Monthly',
    location: 'Online & Offline',
    capacity: '100',
    color: 'from-blue-400 to-blue-600',
  },
  {
    title: 'Science Challenge',
    titleZh: '科学挑战赛',
    description: 'Competition for young innovators to solve real-world problems',
    descriptionZh: '青年创新者解决现实问题的竞赛',
    date: '2025-03',
    location: 'Nationwide',
    capacity: '500',
    color: 'from-green-400 to-green-600',
  },
  {
    title: 'Open Lab Day',
    titleZh: '开放日',
    description: 'Experience our labs and meet our mentors',
    descriptionZh: '体验我们的实验室，与导师见面',
    date: 'Quarterly',
    location: 'Pingshan Base',
    capacity: '50',
    color: 'from-orange-400 to-orange-600',
  },
];

export function ActivitiesGallery() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <AnimatedCard variant="glass" className="p-0 overflow-hidden h-full">
                {/* Header with gradient */}
                <div className={`bg-gradient-to-br ${activity.color} p-6`}>
                  <h3 className="text-2xl font-bold font-display text-white mb-2">
                    {activity.titleZh}
                  </h3>
                  <p className="text-white/80 text-sm">
                    {activity.title}
                  </p>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    {activity.descriptionZh}
                  </p>

                  <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{activity.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{activity.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      <span>{activity.capacity} participants</span>
                    </div>
                  </div>
                </div>
              </AnimatedCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
