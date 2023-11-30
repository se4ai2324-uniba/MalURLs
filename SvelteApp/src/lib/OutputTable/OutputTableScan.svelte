<script>
</script>

<table class="OutputTableScan">
  <tbody>
    <tr>
      <td class="LeftSide">
        <slot />Model
        <!-- Contenuto Colonna 1 Riga 2 -->
        <!-- Contenuto Colonna 1 Riga 3 -->
      </td>
    </tr>
    <tr>
      <td class="LeftSide"> 1 </td>
    </tr>
    <tr>
      <td class="LeftSide"> 2 </td>
    </tr>
    <tr>
      <td class="LeftSide"> 3 </td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <td class="RightSide">
        <slot />Prediction
        <!-- Contenuto Colonna 2 Riga 2 -->
        <!-- Contenuto Colonna 2 Riga 3 -->
      </td>
    </tr>
    <tr>
      <td class="RightSide"> 4 </td>
    </tr>
    <tr>
      <td class="RightSide"> 5 </td>
    </tr>
    <tr>
      <td class="RightSide"> 6 </td>
    </tr>
  </tbody>
</table>

<style>
  .OutputTableScan {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    border-collapse: collapse;
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
