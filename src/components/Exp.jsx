import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Card, DatePicker, Form, Input, Space } from "antd";

const { TextArea } = Input;

const Exp = ({ form, experiences, handleSubmit, prev }) => {
  return (
    <>
      <Form
        form={form}
        layout="vertical"
        initialValues={{ experiences }}
        onFinish={handleSubmit}
      >
        <Form.List name="experiences">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, ...rest }) => (
                <Card
                  key={key}
                  className="mb-4"
                  extra={
                    fields.length > 1 ? (
                      <MinusCircleOutlined onClick={() => remove(name)} />
                    ) : null
                  }
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Form.Item
                      {...rest}
                      name={[name, "company"]}
                      label="Company"
                      rules={[
                        {
                          required: true,
                          message: "enter your company name",
                        },
                      ]}
                    >
                      <Input placeholder="Company name" />
                    </Form.Item>

                    <Form.Item
                      {...rest}
                      name={[name, "position"]}
                      label="Position"
                      rules={[
                        { required: true, message: "enter your position" },
                      ]}
                    >
                      <Input placeholder="Your position" />
                    </Form.Item>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Form.Item
                      {...rest}
                      name={[name, "startDate"]}
                      label="Start Date"
                      rules={[
                        { required: true, message: "select the starting date" },
                      ]}
                    >
                      <DatePicker style={{ width: "100%" }} picker="month" />
                    </Form.Item>

                    <Form.Item
                      {...rest}
                      name={[name, "endDate"]}
                      label="End Date"
                    >
                      <DatePicker style={{ width: "100%" }} picker="month" />
                    </Form.Item>
                  </div>

                  <Form.Item
                    {...rest}
                    name={[name, "description"]}
                    label="Description"
                    rules={[
                      {
                        required: true,
                        message: "add your job description",
                      },
                    ]}
                  >
                    <TextArea
                      rows={4}
                      placeholder="Describe your responsibilities and achievements"
                    />
                  </Form.Item>
                </Card>
              ))}

              <Form.Item>
                <Button
                  type="dashed"
                  onClick={() => add()}
                  block
                  icon={<PlusOutlined />}
                >
                  Add Experience
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
    </>
  );
};

export default Exp;
