## Bootcamp E2E

Hello,
in this project you can perform end-to-end tests for the Internet shop https://www.newegg.com

## Running the tests

1. Clone this repository to your computer.
```
git clone <link>
```
2. Build the application.
```
yarn
```
3. Run the tests.
```
yarn wdio
```
4. The terminal output will show you the results.

## Example results
```
 "spec" Reporter:
------------------------------------------------------------------
[chrome 108.0.5359.71 windows #0-0] Running: chrome (v108.0.5359.71) on windows
[chrome 108.0.5359.71 windows #0-0] Session ID: 02540f2f2810464a60ab56a915272a0f
[chrome 108.0.5359.71 windows #0-0]
[chrome 108.0.5359.71 windows #0-0] » \features\bootcamp.feature
[chrome 108.0.5359.71 windows #0-0] Bootcamp E2E
[chrome 108.0.5359.71 windows #0-0] Automated JS end-to-end tests for the Internet shop https://www.newegg.com
[chrome 108.0.5359.71 windows #0-0]
[chrome 108.0.5359.71 windows #0-0] I can search items using top middle search bar
[chrome 108.0.5359.71 windows #0-0]    ✓ Given I am on the home page of the online store
[chrome 108.0.5359.71 windows #0-0]    ✓ And I close the promo banner if appears
[chrome 108.0.5359.71 windows #0-0]    ✓ When I entry the word Windows in the search bar
[chrome 108.0.5359.71 windows #0-0]    ✓ And I click the search button
[chrome 108.0.5359.71 windows #0-0]    ✓ Then I can see that at least one item appears
[chrome 108.0.5359.71 windows #0-0]
[chrome 108.0.5359.71 windows #0-0] I can return to the home page by clicking the logo button in the top right corner
[chrome 108.0.5359.71 windows #0-0]    ✓ Given I am on the home page of the online store
[chrome 108.0.5359.71 windows #0-0]    ✓ And I close the promo banner if appears
[chrome 108.0.5359.71 windows #0-0]    ✓ When I open Today's Best Deals tab
[chrome 108.0.5359.71 windows #0-0]    ✓ And I click on the Internet shop logo
[chrome 108.0.5359.71 windows #0-0]    ✓ Then I can see that the home page opens
[chrome 108.0.5359.71 windows #0-0]
[chrome 108.0.5359.71 windows #0-0] 10 passing (18.7s)


Spec Files:      1 passed, 1 total (100% completed) in 00:00:20

2022-12-01T18:41:24.549Z INFO @wdio/local-runner: Shutting down spawned worker
2022-12-01T18:41:24.823Z INFO @wdio/local-runner: Waiting for 0 to shut down gracefully
2022-12-01T18:41:24.824Z INFO @wdio/local-runner: shutting down
Done in 22.02s.
```
