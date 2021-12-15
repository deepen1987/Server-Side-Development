<?php
interface Executor {
  public function execute();
}

class BatchExecutor implements Executor {
  public function execute() {
    echo "Executing batch commands. ".date('D, d M Y H:i:s', time());
  }
}

$executor = new BatchExecutor();
$executor->execute();
?>