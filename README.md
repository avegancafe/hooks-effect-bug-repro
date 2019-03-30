When running `yarn test`, you get this order of execution:
![failing test](https://raw.githubusercontent.com/kyleholzinger/hooks-effect-bug-repro/master/images/before.png)

Given that we are mocking out the axios request, wrapping the mount in `act`, and calling `jest#runAllTimers`,
the effect within `TodoList` should be queued and executed within that `act` call. Somehow this
isn't happening, and react-dom warns that an update to `TodoList` is happening outside of `act`.
