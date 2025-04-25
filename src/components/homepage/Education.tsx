import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import Card from "../common/Card";
import "./styles/education.css";

export default function Education() {
  return (
    <div className="education  md:flex pb-[40px] w-full md:w-[400px]">
      <Card
        icon={faGraduationCap}
        title="Education"
        body={
          <div className="educations-body mb-2.5">
            <div className="education flex gap-6 pb-[40px] w-full md:w-[400px]">
              <img
                src="./mercu.png"
                alt="mercubuana"
                className="rounded-full w-[36px] h-[36px] outline-4 outline-white  shadow-[0_7px_10px_rgba(0,0,0,0.25)]"
              />
              <div className="flex flex-col w-[250px]">
                <div className="education-title">Mercu Buana University</div>
                <div className="education-subtitle">Information Systems</div>
              </div>
              <div className="education-duration">2021 - 2025</div>
            </div>

            <div className="education flex gap-6  pb-[40px] w-full md:w-[400px]">
              <img
                src="./revou.png"
                alt="revou"
                className="rounded-full w-[36px] h-[36px] outline-4 outline-white  shadow-[0_7px_10px_rgba(0,0,0,0.25)]"
              />
              <div className="flex flex-col w-[250px]">
                <div className="education-title">Revou Tech Academy</div>
                <div className="education-subtitle">
                  Software Engineer & Data Analyst
                </div>
              </div>
              <div className="education-duration">2024</div>
            </div>
          </div>
        }
      />
    </div>
  );
}
