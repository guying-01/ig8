/*
 * @Author: gy
 * @Date: 2020-05-30 13:46:25
 * @LastEditors: gy
 * @LastEditTime: 2020-06-24 11:53:44
 */
import { getAction, deleteAction, putAction, postAction } from '@/api/manage'

const ig8_request_params = {
  VER: 1
}

const GET_GOODS = params =>
  postAction(
    '/pay.php',
    Object.assign(
      ig8_request_params,
      { CMD: 'GET_GOODS' },
      { PARAMS: JSON.stringify(params) }
    )
  )

export { GET_GOODS }
