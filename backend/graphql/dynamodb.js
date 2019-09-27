import AWS from "aws-sdk";

AWS.config.update({
    region: "ap-south-1",
    endpoint: "http://localhost:8000"
});

const dynamodb = new AWS.DynamoDB.DocumentClient();
const TABLE_NAME = "Customer";

export const getCustomers = async () => {
    
    var params = {
        TableName: TABLE_NAME
    };

    return await new Promise((resolve, reject) => {
        dynamodb.scan(params, (error, data) => {
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
        TableName: TABLE_NAME,
        Item: {
            id: create_uuid(),
            name,
            age,
            gender
        }
    };

    return await new Promise((resolve, reject) => {
        dynamodb.put(params, (error, data) => {
            if (error) {
                console.log(`${error.stack}`);
                resolve({
                    statusCode: 400,
                    error: `${error.stack}`
                });

            } else {
                resolve({
                    statusCode: 200,
                    data: params.Item
                });
            }
        });
    });
};

export const putCustomer = async (id, name, age, gender) => {
    var params = {
        TableName: TABLE_NAME,
        Key: {
            id
        },
        KeyCOnditionExpression: "#name=:name",
        UpdateExpression: "set #name=:name, age=:a, gender=:g",
        ExpressionAttributeNames: {
            '#name': "name"
        },
        ExpressionAttributeValues: {
            ":name": name,
            ":a": age,
            ":g": gender
        },
        ReturnValues: "UPDATED_NEW"
    };

    return await new Promise((resolve, reject) => {
        dynamodb.update(params, (error, data) => {
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
                    data: "success"
                });
            }
        });
    });
};

export const deleteCustomer = async (id) => {
    var params = {
        TableName: TABLE_NAME,
        Key: {
            id
        }
    };

    return await new Promise((resolve, reject) => {
        dynamodb.delete(params, (error, data) => {
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
                    data: "success"
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
