let API_ROUTE 
process.env.NODE_ENV === 'development' ? 
    API_ROUTE = 'http://115.78.234.111:5000':
    API_ROUTE = '/'
export default API_ROUTE