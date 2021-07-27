let API_ROUTE 
process.env.NODE_ENV === 'development' ? 
    API_ROUTE = 'https://af4e6db2f6d3.ngrok.io/api/v1':
    API_ROUTE = '/'
export default API_ROUTE