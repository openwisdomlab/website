'use client';

import { motion } from 'framer-motion';
import { MapPin, Beaker, Cpu, Wrench } from 'lucide-react';
import { AnimatedCard } from '@/components/ui/card';

const spaces = [
  {
    name: 'Pingshan Innovation Base',
    nameZh: '坪山创新基地',
    description: 'Our flagship space with state-of-the-art facilities',
    descriptionZh: '配备一流设施的旗舰空间',
    location: 'Pingshan, Shenzhen',
    equipment: ['3D Printers', 'CNC Machines', 'Electronics Lab'],
    icon: Beaker,
    color: 'from-primary-500 to-secondary-500',
  },
  {
    name: 'Digital Lab',
    nameZh: '数字实验室',
    description: 'High-performance computing and AI development',
    descriptionZh: '高性能计算和AI开发',
    location: 'Online + Hybrid',
    equipment: ['GPU Clusters', 'Cloud Computing', 'VR/AR Station'],
    icon: Cpu,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'Maker Space',
    nameZh: '创客空间',
    description: 'Hands-on prototyping and fabrication',
    descriptionZh: '动手原型制作和加工',
    location: 'Multiple Locations',
    equipment: ['Laser Cutters', 'Soldering Stations', 'Material Library'],
    icon: Wrench,
    color: 'from-orange-500 to-red-500',
  },
];

export function SpacesShowcase() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {spaces.map((space, index) => (
            <motion.div
              key={space.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <AnimatedCard variant="default" className="p-0 overflow-hidden h-full">
                {/* Header */}
                <div className={`bg-gradient-to-br ${space.color} p-6`}>
                  <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4">
                    <space.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold font-display text-white mb-1">
                    {space.nameZh}
                  </h3>
                  <p className="text-white/80 text-sm">{space.name}</p>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {space.descriptionZh}
                  </p>

                  {/* Location */}
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <MapPin className="w-4 h-4" />
                    <span>{space.location}</span>
                  </div>

                  {/* Equipment */}
                  <div className="flex flex-wrap gap-2">
                    {space.equipment.map((item) => (
                      <span
                        key={item}
                        className="px-2 py-1 text-xs rounded-full bg-gray-100 dark:bg-dark-border text-gray-600 dark:text-gray-400"
                      >
                        {item}
                      </span>
                    ))}
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
