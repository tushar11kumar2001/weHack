import React from 'react'
import { useRoutes } from 'react-router-dom'
import { routes } from '../utils/routes'

const DynamicRoutes = () => {
    const route = useRoutes(routes());
  return route;
}

export default DynamicRoutes
