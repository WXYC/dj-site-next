export default function UserPasswordForm(): JSX.Element {
  return (
    <form name="userpw" onSubmit={handleLogin}>
      <div>
        <table cellPadding="10">
          <tbody>
            <tr>
              <td
                align="center"
                valign="top"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <img
                  src={`/img/wxyc-logo-classic.gif`}
                  alt="WXYC logo"
                  style={{ border: 0 }}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <table cellPadding="10" style={{ height: "90%" }}>
          <tbody>
            <tr>
              <td align="center">
                <span className="title">
                  Please log in to WXYC Library and Flowsheet:
                </span>
                <br />
                <table cellPadding="10">
                  <tbody>
                    <tr>
                      <td align="right" className="label">
                        <b>User Login:</b>
                      </td>
                      <td>
                        <input type="text" name="username" />
                      </td>
                    </tr>
                    <tr>
                      <td align="right" className="label">
                        <b>Password:</b>
                      </td>
                      <td>
                        <input type="password" name="password" />
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={2} align="center">
                        <input
                          type="submit"
                          value="Submit User ID and Password"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={2} align="center">
                        <input type="reset" value="Reset to default values" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </form>
  );
}
