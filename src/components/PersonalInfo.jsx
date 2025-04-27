import { Button, Form, Input } from "antd";

const { TextArea } = Input;

const PersonalInfo = ({ form, personalInfo, handleSubmit }) => {
  return (
    <div>
      <Form
        form={form}
        layout="vertical"
        initialValues={personalInfo}
        onFinish={handleSubmit}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Form.Item
            name="firstName"
            label="First Name"
            rules={[
              { required: true, message: "Please enter your first name" },
            ]}
          >
            <Input placeholder="John" />
          </Form.Item>

          <Form.Item
            name="lastName"
            label="Last Name"
            rules={[{ required: true, message: "Please enter your last name" }]}
          >
            <Input placeholder="Doe" />
          </Form.Item>
        </div>

        <Form.Item
          name="email"
          label="Email"
          rules={[
            { required: true, message: "Please enter your email" },
            { type: "email", message: "Please enter a valid email" },
          ]}
        >
          <Input placeholder="john.doe@example.com" />
        </Form.Item>

        <Form.Item
          name="phone"
          label="Phone"
          rules={[
            { required: true, message: "Please enter your phone number" },
          ]}
        >
          <Input placeholder="+8801794661766" />
        </Form.Item>

        <Form.Item name="address" label="Address">
          <Input placeholder="Your Address" />
        </Form.Item>

        <Form.Item
          name="summary"
          label="Professional Summary"
          rules={[
            {
              required: true,
              message: "Please add a short description about you.",
            },
          ]}
        >
          <TextArea rows={4} placeholder="Your Job Objective" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Next
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default PersonalInfo;
