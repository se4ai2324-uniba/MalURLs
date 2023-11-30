<script>
</script>

<table class="OutputTableGetFeatures">
  <tbody>
    <tr> </tr>
    <tr>
      <td class="LeftSide"> feature 1... </td>

      <td class="RightSide"> description... </td>
    </tr>
  </tbody>
</table>

<style>
  .OutputTableGetFeatures {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    border-collapse: collapse;
    margin-top: 100px;
  }

  .LeftSide,
  .RightSide {
    border: 1px solid var(--gray); /* Stesso bordo per tutte le celle */
    font-size: large;
    color: var(--white);
    padding: 8px;
    background-color: var(--panel);
  }

  .LeftSide {
    color: var(--primary);
    border-right: none;
  }
</style>
