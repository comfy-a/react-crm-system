import AWS from "aws-sdk";

AWS.config.update({
    region: "ap-south-1",
    endpoint: "http://localhost:8000"
});

const dynamoDb = new AWS.DynamoDB.DocumentClient();

export const getCustomers = async () => {

    var params = {
        TableName: "Customer"
    };

    return await new Promise((resolve, reject) => {
        dynamoDb.scan(params, (error, data) => {
            if (error) {
                console.log(`${error.stack}`);
                resolve({
                    statusCode: 400,
                    error: `${error.stack}`
                });

            } else {
                console.log(`${JSON.stringify(data)}`);
                resolve({
                    statusCode: 200,
                    data: data.Items
                });
            }
        });
    });
};

export const postCustomer = async (name, age, gender) => {
    var params = {
        TableName: "Customer",
        Item: {
            id: create_uuid(),
            name,
            age,
            gender
        }
    };

    return await new Promise((resolve, reject) => {
        dynamoDb.put(params, (error, data) => {
            if (error) {
                console.log(`${error.stack}`);
                resolve({
                    statusCode: 400,
                    error: `${error.stack}`
                });

            } else {
                console.log(`${JSON.stringify("success")}`);
                resolve({
                    statusCode: 200,
                    data: params.Item
                });
            }
        });
    });
};


const create_uuid = () => {
    const s4 = () => {
        return ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}
