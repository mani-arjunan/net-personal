class RateLimiter {
  map = {};

  constructor() {
    this.getDetailsFromRedis();
  }

  getDetailsFromRedis() {
    map = this.getDetailsFromRedisService();
  }

  // reqId: unique identifer 'ip' | 'uuid'
  isTheReqAllowed(reqId) {
    if (map[reqId]) {
      const current = Date.now();

      if (current - startTime < 60000) {
        if (count < 100) {
          map[reqId] = {
            ...map[reqId],
            count: map[reqId].count + 1,
          };

          return true;
        } else {
          map[reqId] = {
            startTime: Date.now(),
            count: 1,
          };
          return false;
        }
      }

    } else {
      map[reqId] = {
        startTime: Date.now(),
        count: 1,
      };
    }
  }
}
