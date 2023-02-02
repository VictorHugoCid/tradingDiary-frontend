import useAsync from '../useAsync';
import useToken from '../useToken';

import * as tradeApi from '../../services/tradeApi';

export default function useSaveTrade() {
  const token = useToken();

  const {
    loading: saveEnrollmentLoading,
    error: saveEnrollmentError,
    act: saveEnrollment
  } = useAsync((data) => tradeApi.postTrade(data, token), false);

  return {
    saveEnrollmentLoading,
    saveEnrollmentError,
    saveEnrollment
  };
}
