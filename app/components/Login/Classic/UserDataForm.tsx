export default function UserDataForm(): JSX.Element {
  return (
    <form name="userpw" onSubmit={handlePasswordUpdate}>
      <div>
        <table cellPadding="10">
          <tbody>
            <tr>
              <td align="center" valign="top">
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
                <span className="title">Please update your information:</span>
                <br />
                <table cellPadding="10">
                  <tr>
                    <td align="right" className="label">
                      <b>Real Name:</b>
                    </td>
                    <td>
                      <input type="text" name="name" />
                    </td>
                  </tr>
                  <tr>
                    <td align="right" className="label">
                      <b>DJ Name:</b>
                    </td>
                    <td>
                      <input type="text" name="djName" />
                    </td>
                  </tr>
                  <tr>
                    <td align="right" className="label">
                      <b>New Password:</b>
                    </td>
                    <td>
                      <input type="password" name="password" />
                    </td>
                  </tr>
                  <tr>
                    <td align="right" className="label">
                      <b>Confirm Password:</b>
                    </td>
                    <td>
                      <input type="password" name="confirmPassword" />
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2} align="center">
                      <input type="submit" value="Submit" />
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </form>
  );
}
