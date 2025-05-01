import { motion } from "framer-motion";

const skillsData = [
  {
    category: "Programming Languages",
    items: ["Java", "C++", "C", "Python","R"],
  },
  {
    category: "Visualization tools",
    items: [
      "Excel",
      "Tableau",
      "Power Bi",
    ],
  },
  {
    category: "Other",
    items: [
      "Git",
      "Docker",
      "CI/CD",
      "Data Structures Algorithms",
      "Object-Oriented Programming (OOP)",
    ],
  },
  {
    category: "Other",
    items: [
      "Git",
      "Docker",
      "CI/CD",
      "Data Structures Algorithms",
      "Object-Oriented Programming (OOP)",
    ],
  },
];

const skillLogos = new Map([
  ["Java", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"],
  ["C++", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"],
  ["C", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"],
  ["Python", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"],
  ["SQL", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"],
  ["R","data:image/jpeg;base64,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"],
  ["Excel", "https://static.vecteezy.com/system/resources/previews/044/626/008/non_2x/microsoft-excel-logo-spreadsheet-program-microsoft-office-365-logotype-microsoft-corporation-software-editorial-free-vector.jpg"],
  ["Tableau","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAABGlBMVEX////6+/z4+fsAL3EvU4jAy9umts1ObZrK0+H+//4ANHPr7/Pg5u03WYz//fyaq8VeeqMNOncRPnqNob776NzZ4OpVhJhxi67o7PLnbRvd4+xmgKf65NS4xdY9X5EaRH799u2CmLn41LzvoHDsi07nZxD66uzzv4VrlKb78PLZY3Kwx82zxtHrjSH99u71w47tk1prdZyLk7H229/FCSSis8thbJbT4OORsbqFqLOnvcnP09+HnLt2gKRJaJYlS4Pba3nijZf30anumj19oLHqhxTvqFnxrmj2z6MAKG33z7Tqei7wqHuJrLX648r1xKXzto/qgkHvwcbdeoXKKjnCABnrh0jyztLPO03WWWjqq7PhhpKFjK3MLj9zjKlEAAAIvklEQVR4nO2aC1vbxhKGvWvdLMnWDVWKFUkoF4hxQsDENmBjNSmnbUrT9CS0SVr6///GmV0JW7JlwDkJ0DAvz4PWWnsvn2ZnZteu1RAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAE+VbRNHrTQ7h1dA+HNz2EW0d3HzWZBzXhNOBvCmrC2P7t1W8tViB6t9vdPzjsdp9qhN2gylOd3Ozgboj15z8832YFOtzf3z84fgP/h1wK/fjJ07sZhdY3/7O5zgpEGw6H+wdd+K/x1TR88t2d1eRZpgmn6E901IRzo5oQekvcF9Nke/rqJjXxFdHVrrG/SlqMNWYnvMRuDbs6u1CAMH+i8dK1jIaGshAo19LVcrZfPQc2f3z24yYrvGLWkgngPz0E9p98d8yuh6NrEYX209cT8Tp6uoC1n54V+WmtlVcwCynw5PBLaqIp4ahyhVBJqMs3rcn2z5sMZieMn9enNfrh/n5mJ+xyOFyiCR2FobuixyGuGSVuZWu3QZPW9jpwH/zJGiustzIPU2OpCgOs5dBnhWXT9p0oMvzVOiWK8Fqu9Bq3QpOMUtzZfvDL/emLS+NOO6irib5ad0Rpqua/QZP1vNx6sHPy69p5zaWa6J5lJyvbyb9Okz8fP1zQhCxzsVyTb8tOsrmWNXl0b0ET2l7mR6+iybygX16TuR4ajXKpUVsBOuyymLj+/GJNGqOzo3Z1CxdpQnzXdX3aVhS/NOZME41Xzo2nUhOqu2678pmwGlfTXLEU2ikLCUwHQn0eHOBSPcLKNrtvWB4/PT+pzWuSn5+MjnYrY+dF/oS6hmfKsjcOJhOpNCbQxIo8qDQDQynNtUoTLUwCWTbH4cK8NMVhNUliRqY4U51Inpd16PcDLyTQgiEteaRV4+4e8L1Na7s1vVfSJE9ql2vigybjKk2oGAixWq9baWzZxrwmdpraqqraghkWRanQRHcmqaXWrXhizJmjJsnQSF2N01gVwqkmDZqksceH5AZq6lCiGF5y9QWZ20nG9tp9xts/7z18wEvrmVCwWJkmpFFcAJoYciTTtgMpKyuFmTcU01atNIoE27bjRU3sWIgimKxVkmBRE98RVDVusrc2y61QaWKBqFEEmlvNoiaebQU+WzuuWY/HhIiOl4RX00OfnR/xG/d/33kI7Jyc/JcXHr7laYoPszd2BwZMuvCgFLkZcYQ4TrNSMxgV52JbseyEYd9LKzSxBK8PzZqpZXmFVhc0IVLTsqNECg05VctqKbJlCQFrRU7LmiSxPbWT2CG1tuT0R7WroHXfHBwcHx8cHORnAw8ePWbcOzm5xwuPeZrSGB0Nco4Ki1ZM63WwW1gbcWypvPi6WRizKKv2hK8LV7YWNcniDlHMWI3CWVhY0EQLbCvinw4najouNmKkahrwFd1vqhdoAmNoK1fcfkDMyc+jz+3k10c7wCOwE17YyeykLRlGb3fQMwyp4FNG5kRmTMBOhLzozeqplFpCpkTbrLCTPBYTmE7q0MLHypoQd2LZngjBxRXZIi00Q4P43HDCqH6xJitAGhr4WELy59Ra43B/wku546WEMH9CS0kAZCyMthjYsadkL/RZ95oTW5FCMk2W2glb8VbszSrnNaGhYMfNCUewLbnwUHTTtrKZ16QvqEkh7vBtHz9VymJx6/yEaWncIZxam8UdPXtVSI38sWXL7uWa6AE8/ZlDWdBEAk1si2Pb1qSQ6LmybSf062nSeffyXSe/VcpPGppksJmNdger5SfgYq+kSTuw8vFn41nUxEo9w8mRCh2Bm7JzC/vCmmR57N770/cb+a1yzuZOhD68w+2drZbHUgPWjsiHc6Em4IrjZLk/oWHTSg3Nz9Fmq7fhw9rJXOyCJt7/pUlD493sbf3xqVoTRVAdmI82Gq243wnBeWb39Qs00caCKhizmc5r0uDWMDXRkkPzUjXq81GVfWyNeLGVrUfFLHnwldj7/sXWTJPivnjUnMtB51mmiQuLoukovuaLclXckSVd8xUjstXi6dJiLE4gR02gGc1vK2Fp/YaRGsuSCz0YpVhcI+NU5WmAZkRq2v/MQ9OyJsXzk6tpUpHbUymClMocO04AmWxFzmYmzhiqIGLT4qfmczZQ1ErNsWE43kSWiq34SQqye44zLudsPJWJTUkUDcjqqs/zrkBRk9ra299/mZ6zuZdrolbvi+Hp2ZC6s6BRlcdCHa8WxsUPL+b2NJTjLOior6OSJjUXMmRoxVbLuT1LBKDrlG0d7Hx1rUSr09nodD5svdja4yV+r9VqnJ/Hik3baV90HrtUE9iimc2UbXbSpiyWPt5oB800hqpUMKWSjVXsAYnoNdl7oR1v7pm3DVmIeU3kucUzEl8yBVAyhubpSmcnfHSdl98DWx9PP26xwsuptRA3CQAzjSfs6klLRNEk2I5XWxL1xb4zHjuSMn9MQjRFMqCmL87VVJ0VwJuNxPMSI1z41QfVQ2OcOIakaOUqokPXTn/u3OaK7H16wTg9PeXXT3vT73dEgdmkHccxs9tiwJwbcSlEzo2Z21qVjZGsav4pVn/nBSbLAnHVCPJmFgfAKz7PvXb+egm8//ji49+s8BdbPH4bnntDN8A/OrBkmZ8cO+Jnuu/VoOEkvvHvRludjY2N3J+wUoulW2fMYTF/4msK+BOdFa7ni3Tii6VTmBukFHe0s8HMeVwad74CK3vFr0JJE9obSNOFcml+8s0y04RSqoEm7NcV/PVIuLOabP2RaUJHoRgeDXrwPzuZGgnWXdXk/T/ZvtjvnZ8zDjIpXJnvi+8gnQ/vPvDERAt7vd7u4Mjp9Xjq2dDExUzpbtDIf7XFA7B+NjD8aaJ1Xb/aut2wuHPTY7ht0LPBZ2wmv21o7yjE9VKGjEL3dqSSCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgyJ3hfxVSDn2TwGN9AAAAAElFTkSuQmCC"],
  ["Power Bi","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC0JBusRtczALvIlDYELW-nSJ-RRG2QiYAGQ&s"],
  ["Git", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"],
  ["Docker", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"],
  ["CI/CD", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"],
  ["Data Structures Algorithms", "https://png.pngtree.com/png-clipart/20230925/original/pngtree-data-structures-and-algorithms-concept-icon-symbol-editable-general-vector-png-image_12695241.png"],
  ["Object-Oriented Programming (OOP)", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"],
]);

const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-8 text-center">
          Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillsData.map((skillCategory) => (
            <motion.div
              key={skillCategory.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-purple-600 dark:text-purple-300 mb-4">
                {skillCategory.category}
              </h3>
              <div className="flex flex-wrap gap-4">
                {skillCategory.items.map((skill: string) => (
                  <div
                    key={skill}
                    className="flex items-center gap-2 bg-gray-200 text-gray-800 border-gray-300 p-2 rounded-lg hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 dark:hover:bg-gray-600"
                  >
                    <img
                      src={skillLogos.get(skill)}
                      alt={skill}
                      className="w-6 h-6 rounded-full"
                    />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
