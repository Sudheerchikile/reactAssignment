import {useState, useEffect} from 'react'
import {BallTriangle} from 'react-loader-spinner'
// import BarData  from '../BarData'
import GraphData from "../GraphData"
import "./index.css"

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

const PopulationComponent = () => {
  const [apiResponse, setApiResponse] = useState({
    status: apiStatusConstants.initial,
    data: null,
    errorMsg: null,
  })

  useEffect(() => {
    const getLeaderboardData = async () => {
      setApiResponse({
        status: apiStatusConstants.inProgress,
        data: null,
        errorMsg: null,
      })

      const url = 'https://datausa.io/api/data?drilldowns=Nation&measures=Population'
     

      const response = await fetch(url)
      const responseData = await response.json()
      if (response.ok) {
        setApiResponse(prevApiDetails => ({
          ...prevApiDetails,
          status: apiStatusConstants.success,
          data: responseData.data,
        }))
       
      } else {
        setApiResponse(prevApiDetails => ({
          ...prevApiDetails,
          status: apiStatusConstants.failure,
          errorMsg: responseData.error_msg,
        }))
      }
    }

    getLeaderboardData()
  }, [])
 

  const renderFailureView = () => {
    const {errorMsg} = apiResponse
    return <h1>{errorMsg}</h1>
  }

  const renderSuccessView = () => {
    const {data}=apiResponse
    
    const reversedData = data.slice().reverse();

    return(
        
    <GraphData data={reversedData} />
    
    
 ) }


  const renderLoadingView = () => (
    <div className='loaderContainer'>
      <BallTriangle type="ThreeDots" color="black" height="50" width="50" />
    </div>
  )

  const renderLeaderboard = () => {
    const {status} = apiResponse

    switch (status) {
      case apiStatusConstants.inProgress:
        return renderLoadingView()
      case apiStatusConstants.success:
        return renderSuccessView()
      case apiStatusConstants.failure:
        return renderFailureView()
      default:
        return null
    }
  }

  return <div className='chartsContainer'>
   
    {renderLeaderboard()}</div>
}

export default PopulationComponent
