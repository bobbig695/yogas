import { motion } from "framer-motion";
import { weeklySchedule } from "@/lib/data";

const ScheduleSection = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    },
  };

  return (
    <section id="schedule" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-neutral-900 mb-5">
            Weekly Class Schedule
          </h2>
          <p className="text-neutral-900/70">
            Find the perfect time to join our live online sessions. All classes
            are recorded and available for replay.
          </p>
        </motion.div>

        <motion.div 
          className="overflow-x-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <table className="w-full min-w-[768px] border-collapse bg-neutral-100 rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-primary text-white">
                <th className="p-4 text-left font-medium">Time (EST)</th>
                <th className="p-4 text-left font-medium">Monday</th>
                <th className="p-4 text-left font-medium">Tuesday</th>
                <th className="p-4 text-left font-medium">Wednesday</th>
                <th className="p-4 text-left font-medium">Thursday</th>
                <th className="p-4 text-left font-medium">Friday</th>
                <th className="p-4 text-left font-medium">Saturday</th>
                <th className="p-4 text-left font-medium">Sunday</th>
              </tr>
            </thead>
            <tbody>
              {weeklySchedule.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  className={`border-b border-neutral-300/30 ${
                    rowIndex % 2 === 1 ? "bg-neutral-200/50" : ""
                  }`}
                >
                  <td className="p-4 font-medium">{row.time}</td>
                  <td className="p-4">{row.monday || "-"}</td>
                  <td className="p-4">{row.tuesday || "-"}</td>
                  <td className="p-4">{row.wednesday || "-"}</td>
                  <td className="p-4">{row.thursday || "-"}</td>
                  <td className="p-4">{row.friday || "-"}</td>
                  <td className="p-4">{row.saturday || "-"}</td>
                  <td className="p-4">{row.sunday || "-"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        <motion.div 
          className="mt-10 bg-primary/10 p-6 rounded-xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h3 className="font-heading text-xl font-semibold mb-3">
            Need a Custom Schedule?
          </h3>
          <p className="text-neutral-900/70 mb-4">
            Can't find a time that works for you? We offer private sessions that
            can be scheduled at your convenience.
          </p>
          <a
            href="#contact"
            className="inline-block bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-full transition-colors font-medium"
          >
            Request Private Session
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ScheduleSection;
