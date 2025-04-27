import {
  Button,
  DatePicker,
  Divider,
  Form,
  Input,
  Space,
  Typography
} from "antd";

const { TextArea } = Input;
const { Title } = Typography;

const Academic = ({ form, academics, handleSubmit, prev }) => {
  return (
    <div>
      <Form
        form={form}
        layout="vertical"
        initialValues={academics}
        onFinish={handleSubmit}
      >
        <Title level={4}>Education</Title>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Form.Item
            name="institution"
            label="Institution"
            rules={[
              { required: true, message: "Enter your institution name" },
            ]}
          >
            <Input placeholder="University/College name" />
          </Form.Item>

          <Form.Item
            name="degree"
            label="Degree"
            rules={[{ required: true, message: "Please enter degree" }]}
          >
            <Input placeholder="Bachelor's, Master's, etc." />
          </Form.Item>
        </div>

        <Form.Item
          name="fieldOfStudy"
          label="Field of Study"
          rules={[{ required: true, message: "Enter field of study" }]}
        >
          <Input placeholder="Computer Science, Business, etc." />
        </Form.Item>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Form.Item
            name="startYear"
            label="Start Year"
            rules={[{ required: true, message: "Select the starting year" }]}
          >
            <DatePicker picker="year" style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item
            name="endYear"
            label="End Year"
            rules={[{ required: true, message: "Select the ending year" }]}
          >
            <DatePicker picker="year" style={{ width: "100%" }} />
          </Form.Item>
        </div>

        <Form.Item name="gpa" label="GPA (optional)">
          <Input placeholder="e.g., 3.8/4.0" />
        </Form.Item>

        <Divider />

        <Title level={4}>Extracurricular Activities</Title>
        <Form.Item
          name="extracurricular"
          label="Extracurricular Activities"
        >
          <TextArea
            rows={4}
            placeholder="Add your extracurricular activities."
          />
        </Form.Item>

        <Form.Item>
          <Space>
            <Button onClick={prev}>Previous</Button>
            <Button type="primary" htmlType="submit">
              Preview CV
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Academic;
