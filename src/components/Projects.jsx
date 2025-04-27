import { Button, Card, Form, Input, Space } from "antd";
import { FaPlus } from "react-icons/fa";
import { FaCircleMinus } from "react-icons/fa6";

const { TextArea } = Input;

const Projects = ({ form, projects, handleSubmit, prev }) => {
  return (
    <div>
      <Form
        form={form}
        layout="vertical"
        initialValues={{ projects }}
        onFinish={handleSubmit}
      >
        <Form.List name="projects">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, ...restField }) => (
                <Card
                  key={key}
                  className="mb-4"
                  extra={
                    fields.length > 1 ? (
                      <FaCircleMinus
                        style={{ cursor: "pointer" }}
                        onClick={() => remove(name)}
                      />
                    ) : null
                  }
                >
                  <Form.Item
                    {...restField}
                    name={[name, "title"]}
                    label="Project Title"
                    rules={[
                      { required: true, message: "project title is required" },
                    ]}
                  >
                    <Input placeholder="Project title" />
                  </Form.Item>

                  <Form.Item
                    {...restField}
                    name={[name, "description"]}
                    label="Description"
                    rules={[
                      {
                        required: true,
                        message: "Project description is required",
                      },
                    ]}
                  >
                    <TextArea
                      rows={4}
                      placeholder="say something about your project"
                    />
                  </Form.Item>

                  <Form.Item
                    {...restField}
                    name={[name, "link"]}
                    label="Project Link"
                    rules={[
                      {
                        required: true,
                        message: "Project link is required",
                      },
                    ]}
                  >
                    <Input placeholder="https://your-project.com" />
                  </Form.Item>
                </Card>
              ))}

              <Form.Item>
                <Button
                  type="primary"
                  onClick={() => add()}
                  block
                  icon={<FaPlus />}
                >
                  Add Project
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>

        <Form.Item>
          <Space>
            <Button onClick={prev}>Previous</Button>
            <Button type="primary" htmlType="submit">
              Next
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Projects;
