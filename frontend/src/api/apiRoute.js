let API_ROUTE 
process.env.NODE_ENV === 'development' ? 
    API_ROUTE = 'http://ec2-18-141-203-11.ap-southeast-1.compute.amazonaws.com:8002/api/v1':
    API_ROUTE = '/'
export default API_ROUTE