import { ProjectOutlined } from "@ant-design/icons";
import { Card, Form, Steps, Typography } from "antd";
import { useState } from "react";
import { FaAward, FaRegUser } from "react-icons/fa";
import { HiAcademicCap } from "react-icons/hi";
import Academic from "./components/Academic";
import Exp from "./components/Exp";
import PersonalInfo from "./components/PersonalInfo";
import Preview from "./components/Preview";
import Projects from "./components/Projects";
const { Title } = Typography;
const { Step } = Steps;
const CvMaker = () => {
  const [current, setCurrent] = useState(0);
  const [personalInfo, setPersonalInfo] = useState({});
  const [experiences, setExperiences] = useState([{}]);
  const [projects, setProjects] = useState([{}]);
  const [academics, setAcademics] = useState({});
  const [isShow, setIsShow] = useState(false);
  const [form] = Form.useForm();

  const steps = [
    {
      title: "Personal Info",
      icon: <FaRegUser />,
    },
    {
      title: "Experience",
      icon: <FaAward />,
    },
    {
      title: "Projects",
      icon: <ProjectOutlined />,
    },
    {
      title: "Academics & Extracurricular Activities",
      icon: <HiAcademicCap />,
    },
  ];

  const goToStep = (step) => {
    setCurrent(step);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const handleSubmit = (values) => {
    switch (current) {
      case 0:
        setPersonalInfo(values);
        break;
      case 1:
        setExperiences(values.experiences || [{}]);
        break;
      case 2:
        setProjects(values.projects || [{}]);
        break;
      case 3:
        setAcademics(values);
        break;
      default:
        break;
    }

    if (current < steps.length - 1) {
      setCurrent(current + 1);
    } else {
      setIsShow(true);
    }
  };

  const renderStepContent = () => {
    if (current === 0)
      return (
        <PersonalInfo
          form={form}
          personalInfo={personalInfo}
          handleSubmit={handleSubmit}
        />
      );
    if (current === 1)
      return (
        <Exp
          form={form}
          experiences={experiences}
          handleSubmit={handleSubmit}
          prev={prev}
        />
      );
    if (current === 2)
      return (
        <Projects
          form={form}
          projects={projects}
          handleSubmit={handleSubmit}
          prev={prev}
        />
      );
    if (current === 3)
      return (
        <Academic
          form={form}
          academics={academics}
          handleSubmit={handleSubmit}
          prev={prev}
        />
      );

    return null;
  };

  const renderCVPreview = () => {
    return (
      <Preview
        personalInfo={personalInfo}
        experiences={experiences}
        projects={projects}
        academics={academics}
        isShow={isShow}
        setIsShow={setIsShow}
      ></Preview>
    );
  };

  return (
    <div>
      <div className="p-6 max-w-4xl mx-auto">
        <Title level={2} className="mb-6 text-center">
          CV Maker
        </Title>

        <Card className="mb-6">
          <Steps current={current} onChange={goToStep}>
            {steps.map((item) => (
              <Step key={item.title} title={item.title} icon={item.icon} />
            ))}
          </Steps>
        </Card>

        <Card>
          <div className="p-4">
            <Title level={3} className="mb-4">
              {steps[current].title}
            </Title>
            {renderStepContent()}
          </div>
        </Card>

        {renderCVPreview()}
      </div>
    </div>
  );
};

export default CvMaker;
