Reproduction of https://github.com/meteor/meteor/issues/1633 to show it's a serious problem.

1. Start server
2. Connect in one window, sign up, logout.
3. In second window hit the "Click Me to blow the server up"
4. Note the server starts spewing "MongoError: invalid query" errors repeatedly.
5. Try to login in the first window. Note that it hangs.
6. Close the second window. Note that it doesn't help.

The only solution is to restart the server. This happens in production also.