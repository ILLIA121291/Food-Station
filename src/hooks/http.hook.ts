import { useState, useCallback } from 'react';

// Interfase ------------------------------------------------
export interface IDataSendToServer {
  [key: string]: string | number | boolean;
}

// HOOKS ----------------------------------------------------------
const useHttp = () => {
  // Состояние HTTP запроса: wating, loading, error ;
  const [stateHTTPprocess, setStateHTTPprocess] = useState<string>('waiting');

  // Функция которая формирует fetch запрос;
  const request = useCallback(async (url: string, 
                                      method: 'GET' | 'POST' = 'GET', 
                                      body: string | null = null,
                                      headers = { 'Content-type': 'application/json' }) => {
    // Изминение статуса HTTP запроса при выполнеии fetch запрос;
    setStateHTTPprocess('loading');

    // Попыткак выполения fetch запроса;
    try {
      // Запуск выполнения fetch запроса;
      const response = await fetch(url, { method, body, headers });

      // Действия если резултата fetch не успешный;
      if (!response.ok) {
        throw new Error(`Could not fetch ${url}, status: ${response.status}`);
      }

      // Действия если результат fetch запроса успешный;
      const data = await response.json();

      // Возврат полученных данных из fetch запроса;
      return data;

      // Действия на случай если в секции try произошла ошибка;
    } catch (e) {
      setStateHTTPprocess('error');
      throw e;
    }
  }, []);

  // Сброс ошибкт 
  const clearError = useCallback(() => {
    setStateHTTPprocess('loading');
  }, []);


  return {
    request,
    stateHTTPprocess,
    setStateHTTPprocess,
    clearError,
  };
};

export default useHttp;


