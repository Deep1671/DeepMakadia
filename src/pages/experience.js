import React from "react";
import { FaUniversity, FaLaptopCode, FaChartLine } from "react-icons/fa";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      icon: <FaUniversity className="me-2 text-warning fs-4" />,
      title: "Treasurer – ACM Student Chapter, Nirma University",
      subtitle: "Treasurer | ACM Student Chapter, Nirma University | Aug 2024 – Present",
      bullets: [
        "Managed and maintained financial records for all club events, ensuring transparency and timely reporting to university authorities.",
        "Created and tracked annual budgets, allocating funds efficiently across technical workshops, expert sessions, and competitions.",
        "Collaborated with core team members to secure sponsorships and handle reimbursements, raising ₹15,000+ in external funding.",
        "Implemented digital tools (Excel, Google Sheets) for accurate bookkeeping, reducing manual errors and improving audit readiness.",
        "Played a key role in organizing club activities, handling logistics and vendor payments while staying within budget constraints.",
      ],
    },
    {
      id: 2,
      icon: <FaLaptopCode className="me-2 text-info fs-4" />,
      title: "Web Design Intern – Brainybeam Technologies",
      subtitle: "Web Design Intern (React Developer) | Ahmedabad, India | May 2025 – Jun 2025",
      bullets: [
        "Developed responsive and user-friendly web interfaces using React.js and React-Bootstrap for client-facing applications.",
        "Collaborated with senior developers to implement reusable components and optimized front-end performance.",
        "Applied modern UI/UX principles and ensured cross-browser compatibility across major devices.",
        "Participated in daily stand-ups and version control using GitHub, ensuring smooth collaboration and timely project delivery.",
      ],
    },
    {
      id: 3,
      icon: <FaChartLine className="me-2 text-success fs-4" />,
      title: "Data Science Intern – Innobyte Technologies",
      subtitle: "Data Science Intern | Remote | Jun 2025 – Jul 2025",
      bullets: [
        "Analyzed large e-commerce datasets to derive customer insights and product performance trends.",
        "Used Python, Pandas, and Matplotlib for exploratory data analysis and visualization.",
        "Generated actionable dashboards and reports for internal stakeholders.",
        "Collaborated with cross-functional teams to drive data-backed product improvements.",
      ],
    },
  ];

  return (
    <>
      <style>{`
        .card-glow {
          position: relative;
          padding: 1.5rem;
          border-radius: 1rem;
          background-color: #212529;
          color: white;
          border: 2px solid #444;
          box-shadow: none;
          overflow: hidden;
          transition: border-color 0.4s ease, box-shadow 0.4s ease;
          cursor: pointer;
        }

        /* Glow on hover */
        .card-glow:hover {
          border-color: #f39c12;
          box-shadow:
            0 0 8px 2px #f39c12,
            0 0 20px 6px rgba(243, 156, 18, 0.6),
            0 0 30px 10px rgba(243, 156, 18, 0.4);
        }

        /* Shining effect using a pseudo element */
        .card-glow::before {
          content: "";
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(
            120deg,
            rgba(255, 255, 255, 0) 30%,
            rgba(255, 255, 255, 0.3) 50%,
            rgba(255, 255, 255, 0) 70%
          );
          transform: rotate(25deg) translateX(-100%);
          transition: none;
          pointer-events: none;
        }

        /* Animate shining on hover */
        .card-glow:hover::before {
          animation: shine 2s linear infinite;
        }

        @keyframes shine {
          0% {
            transform: rotate(25deg) translateX(-100%);
          }
          100% {
            transform: rotate(25deg) translateX(100%);
          }
        }
      `}</style>

      <div className="container py-5 text-white">
        <h2 className="text-center mb-5">🧠 My Experience</h2>
        <div className="row">
          {experiences.map((exp) => (
            <div key={exp.id} className="col-md-12 mb-4">
              <div className="card-glow">
                <h4 className="mb-1">
                  {exp.icon}
                  {exp.title}
                </h4>
                <h6 className="text-secondary mb-3">{exp.subtitle}</h6>
                <ul className="ms-3">
                  {exp.bullets.map((point, idx) => (
                    <li key={idx} className="mb-2">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Experience;
