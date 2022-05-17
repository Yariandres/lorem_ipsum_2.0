package com.valtech.lorem.functions.logging;

import com.microsoft.azure.functions.ExecutionContext;
import com.microsoft.azure.functions.OutputBinding;
import com.microsoft.azure.functions.annotation.Cardinality;
import com.microsoft.azure.functions.annotation.EventHubTrigger;
import com.microsoft.azure.functions.annotation.FunctionName;
import com.microsoft.azure.functions.annotation.TableOutput;
import org.apache.commons.lang3.RandomUtils;

import java.text.SimpleDateFormat;
import java.time.Instant;
import java.util.Date;

public class Function {

    @FunctionName("EventHubItems")
    public void run(@EventHubTrigger(name = "msg", eventHubName = "useractivity",
            cardinality = Cardinality.ONE, connection = "EventHubConnectionString") LogItem item,
                    @TableOutput(name = "activityOutput", tableName = "useractivitylog",
                            connection = "TableStorageConnectionString")
                            OutputBinding<LogItem> document, final ExecutionContext context) {
        context.getLogger().info("Java EventHub trigger fired " + item.toString());
        item.setPartitionKey(new SimpleDateFormat("yyyy-MM-dd").format(new Date()));
        item.setRowKey(String.valueOf(Instant.now().toEpochMilli()) + '.' +
                RandomUtils.nextLong(100, 999));

        document.setValue(item);
    }
}
